'use client'

import { useState } from 'react'
import { X, Lock, Zap, CheckCircle } from 'lucide-react'

interface FactureFormProps {
  onClose: () => void
}

type EnergyType = 'Électricité' | 'Gaz' | 'Électricité et Gaz' | ''
type TarifOption = 'Base' | 'HP/HC' | ''

interface FormData {
  prenom: string
  email: string
  telephone: string
  code_postal: string
  type_energie: EnergyType
  fournisseur_actuel: string
  prix_kwh_ttc: string
  abonnement_mensuel_ht: string
  option_tarifaire: TarifOption
  puissance_kva: string
}

const WEBHOOK_URL = 'https://n8n-buih.sliplane.app/webhook/lead-capture'

export default function FactureForm({ onClose }: FactureFormProps) {
  const [form, setForm] = useState<FormData>({
    prenom: '',
    email: '',
    telephone: '',
    code_postal: '',
    type_energie: '',
    fournisseur_actuel: '',
    prix_kwh_ttc: '',
    abonnement_mensuel_ht: '',
    option_tarifaire: '',
    puissance_kva: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const set = (key: keyof FormData, val: string) => {
    setForm(prev => ({ ...prev, [key]: val }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: false }))
  }

  const validate = () => {
    const required: (keyof FormData)[] = [
      'prenom', 'email', 'type_energie',
      'fournisseur_actuel', 'prix_kwh_ttc', 'abonnement_mensuel_ht',
    ]
    const newErrors: Partial<Record<keyof FormData, boolean>> = {}
    required.forEach(k => {
      if (!form[k].trim()) newErrors[k] = true
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setLoading(true)
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'formulaire_facture',
          prenom: form.prenom,
          email: form.email,
          telephone: form.telephone,
          code_postal: form.code_postal,
          type_energie: form.type_energie,
          fournisseur_actuel: form.fournisseur_actuel,
          prix_kwh_ttc: parseFloat(form.prix_kwh_ttc) || null,
          abonnement_mensuel_ht: parseFloat(form.abonnement_mensuel_ht) || null,
          option_tarifaire: form.option_tarifaire || 'Base',
          puissance_kva: form.puissance_kva || null,
        }),
      })
    } catch (_) {
      // Fail silently — succès affiché quoi qu'il arrive
    }
    setLoading(false)
    setSuccess(true)
  }

  const inputClass = (key: keyof FormData) =>
    `w-full px-3 py-2 text-sm border rounded-lg font-sans outline-none transition-all duration-150 ${
      errors[key]
        ? 'border-red-400 ring-2 ring-red-100 focus:border-red-400'
        : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
    }`

  const NdotAmber = ({ n }: { n: string }) => (
    <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-amber-400 text-white text-[10px] font-bold flex-shrink-0">
      {n}
    </span>
  )
  const NdotBlue = ({ n }: { n: string }) => (
    <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-blue-600 text-white text-[10px] font-bold flex-shrink-0">
      {n}
    </span>
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white rounded-2xl w-full max-w-[960px] max-h-[92vh] overflow-y-auto shadow-2xl relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
        >
          <X size={16} />
        </button>

        {/* ── SUCCESS ── */}
        {success ? (
          <div className="flex flex-col items-center justify-center py-20 px-10 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5 shadow-lg">
              <CheckCircle size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Analyse en cours !</h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm mb-6">
              Merci <strong className="text-gray-800">{form.prenom}</strong> ! Nous comparons votre contrat avec les meilleures offres du marché.<br /><br />
              Vous recevrez vos économies potentielles <strong>sous 24h</strong>.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-3 text-green-700 text-sm font-medium">
              ✅ Dossier envoyé à <strong>{form.email}</strong>
            </div>
          </div>
        ) : (
          <>
            {/* ── HEADER ── */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 px-8 py-6 border-b border-gray-100 rounded-t-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-xs font-semibold mb-2">
                <Zap size={11} /> Analyse gratuite
              </div>
              <h2 className="text-xl font-extrabold text-gray-900">Comparez votre contrat énergie</h2>
              <p className="text-sm text-gray-500 mt-1">Renseignez vos informations — utilisez votre facture pour remplir la 2ème partie</p>
            </div>

            {/* ── BODY ── */}
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* ─── FORMULAIRE ─── */}
              <div className="p-7 border-r border-gray-100">

                {/* Bloc 1 */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Votre profil</div>
                    <div className="text-xs text-gray-400">Informations de contact</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 mb-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Prénom *</label>
                    <input type="text" placeholder="Jean" value={form.prenom} onChange={e => set('prenom', e.target.value)} className={inputClass('prenom')} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Téléphone</label>
                    <input type="tel" placeholder="06 12 34 56 78" value={form.telephone} onChange={e => set('telephone', e.target.value)} className={inputClass('telephone')} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email professionnel *</label>
                  <input type="email" placeholder="contact@monrestaurant.fr" value={form.email} onChange={e => set('email', e.target.value)} className={inputClass('email')} />
                </div>

                <div className="grid grid-cols-2 gap-2.5 mb-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Code postal</label>
                    <input type="text" placeholder="69001" maxLength={5} value={form.code_postal} onChange={e => set('code_postal', e.target.value)} className={inputClass('code_postal')} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Type d&apos;énergie *</label>
                    <select value={form.type_energie} onChange={e => set('type_energie', e.target.value as EnergyType)} className={inputClass('type_energie')}>
                      <option value="">Sélectionner</option>
                      <option>Électricité</option>
                      <option>Gaz</option>
                      <option>Électricité et Gaz</option>
                    </select>
                  </div>
                </div>

                <hr className="border-gray-100 my-4" />

                {/* Bloc 2 */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Votre contrat actuel</div>
                    <div className="text-xs text-gray-400">Retrouvez ces infos sur votre facture →</div>
                  </div>
                </div>

                {/* ① Fournisseur */}
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <NdotAmber n="①" />
                    <span className="text-xs font-semibold text-gray-600">Fournisseur actuel *</span>
                  </div>
                  <select value={form.fournisseur_actuel} onChange={e => set('fournisseur_actuel', e.target.value)} className={inputClass('fournisseur_actuel')}>
                    <option value="">Sélectionner votre fournisseur</option>
                    <option>EDF</option>
                    <option>Engie</option>
                    <option>TotalEnergies</option>
                    <option>Vattenfall</option>
                    <option>Iberdrola</option>
                    <option>Ekwateur</option>
                    <option>Ohm Énergie</option>
                    <option>Autre</option>
                  </select>
                </div>

                {/* ② kWh + ③ Abonnement */}
                <div className="grid grid-cols-2 gap-2.5 mb-3">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <NdotAmber n="②" />
                      <span className="text-xs font-semibold text-gray-600">Prix au kWh TTC *</span>
                    </div>
                    <div className="relative">
                      <input type="number" placeholder="0.2276" step="0.0001" value={form.prix_kwh_ttc} onChange={e => set('prix_kwh_ttc', e.target.value)} className={`${inputClass('prix_kwh_ttc')} pr-12`} />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 pointer-events-none">€/kWh</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <NdotAmber n="③" />
                      <span className="text-xs font-semibold text-gray-600">Abonnement HT *</span>
                    </div>
                    <div className="relative">
                      <input type="number" placeholder="40.34" step="0.01" value={form.abonnement_mensuel_ht} onChange={e => set('abonnement_mensuel_ht', e.target.value)} className={`${inputClass('abonnement_mensuel_ht')} pr-6`} />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 pointer-events-none">€</span>
                    </div>
                  </div>
                </div>

                {/* ④ Option tarifaire */}
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <NdotAmber n="④" />
                    <span className="text-xs font-semibold text-gray-600">Option tarifaire</span>
                  </div>
                  <div className="flex gap-2">
                    {(['Base', 'HP/HC'] as TarifOption[]).map(opt => (
                      <button key={opt} type="button" onClick={() => set('option_tarifaire', opt)}
                        className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all ${
                          form.option_tarifaire === opt
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 text-gray-500 hover:border-blue-300 hover:text-blue-600'
                        }`}>
                        {opt === 'HP/HC' ? 'Heures Creuses (HP/HC)' : 'Base'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ⑤ Puissance */}
                <div className="mb-5">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <NdotAmber n="⑤" />
                    <span className="text-xs font-semibold text-gray-600">Puissance souscrite</span>
                  </div>
                  <select value={form.puissance_kva} onChange={e => set('puissance_kva', e.target.value)} className={inputClass('puissance_kva')}>
                    <option value="">Sélectionner</option>
                    {['6 kVA', '9 kVA', '12 kVA', '18 kVA', '24 kVA', '30 kVA', '36 kVA'].map(v => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </div>

                <button onClick={handleSubmit} disabled={loading}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? 'Envoi en cours…' : 'Calculer mes économies →'}
                </button>

                <div className="flex items-center justify-center gap-1.5 mt-2.5 text-xs text-gray-400">
                  <Lock size={10} />
                  Données confidentielles · Gratuit · Sans engagement
                </div>
              </div>

              {/* ─── FACTURE ANNOTÉE ─── */}
              <div className="p-5 bg-gray-50 rounded-br-2xl">

                <div className="flex items-center gap-2 p-2.5 bg-amber-50 border border-amber-200 rounded-lg mb-3">
                  <span className="text-base">📄</span>
                  <div>
                    <div className="text-xs font-bold text-amber-800">Exemple de facture</div>
                    <div className="text-[10.5px] text-amber-600">Où trouver les infos à renseigner</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden text-[10.5px] text-gray-600 leading-snug">

                  {/* En-tête ① */}
                  <div className="p-3 border-b border-gray-100 flex justify-between items-start">
                    <div>
                      <div className="text-xl font-black text-red-600 tracking-tight">EDF</div>
                      <div className="text-[9px] text-gray-400 mt-0.5">SIRET 552 081 317 · Paris</div>
                      <div className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-amber-50 border border-amber-300 rounded text-[9.5px] font-bold text-amber-800">
                        <NdotAmber n="①" /> Fournisseur — retrouvez le logo ici
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9.5px] text-gray-400">Facture 09/07/2025</div>
                      <div className="font-bold text-gray-800 text-[10px] mt-0.5">n° 10230507673</div>
                      <div className="mt-1 inline-block px-2 py-0.5 bg-amber-100 border border-amber-300 rounded text-[10px] font-extrabold text-amber-900">
                        Total TTC : 702,51 €
                      </div>
                    </div>
                  </div>

                  {/* Client */}
                  <div className="px-3 py-2 border-b border-gray-100">
                    <div className="font-bold text-[11.5px] text-gray-900">BISTROT DES ARTS</div>
                    <div className="text-[9px] text-gray-400">8 rue Georges Méliès · 69680 Chassieu</div>
                  </div>

                  {/* Contrat ④⑤ */}
                  <div className="bg-gray-50 border-b border-gray-100">
                    <div className="px-3 pt-2 pb-1 font-bold text-[10px] text-gray-800">Contrat Flexible — Prix non réglementés</div>
                    <div className="grid grid-cols-2 border-t border-gray-100">
                      <div className="px-3 py-1.5 border-r border-gray-100 flex justify-between">
                        <span className="text-gray-400">Souscrit le</span><span className="font-bold text-gray-800">04/01/2024</span>
                      </div>
                      <div className="px-3 py-1.5 flex justify-between">
                        <span className="text-gray-400">Échéance</span><span className="font-bold text-gray-800">04/01/2026</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-3 py-1.5 border-t border-amber-100 bg-amber-50/60">
                      <div className="flex items-center gap-1.5">
                        <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-amber-100 border border-amber-200 rounded text-[9px] font-bold text-amber-800">
                          <NdotAmber n="④" /> Option tarifaire
                        </div>
                        <span className="text-gray-400 text-[9.5px]">Option :</span>
                      </div>
                      <span className="font-bold text-gray-800">Tarif Base</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-1.5 border-t border-amber-100 bg-amber-50/60">
                      <div className="flex items-center gap-1.5">
                        <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-amber-100 border border-amber-200 rounded text-[9px] font-bold text-amber-800">
                          <NdotAmber n="⑤" /> Puissance
                        </div>
                        <span className="text-gray-400 text-[9.5px]">Puissance :</span>
                      </div>
                      <span className="font-bold text-gray-800">30 kVA</span>
                    </div>
                  </div>

                  {/* ③ Abonnement */}
                  <div className="border-b border-gray-100">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-100 border-b border-amber-200 text-[9px] font-bold text-amber-800">
                      <NdotAmber n="③" /> Abonnement mensuel HT — à reporter dans le formulaire
                    </div>
                    <div className="flex justify-between items-center px-3 py-2 bg-amber-50">
                      <div>
                        <div className="font-semibold text-[10.5px] text-gray-800">Abonnement électricité (HT)</div>
                        <div className="text-[9px] text-gray-400 mt-0.5">01/07/2025 au 31/07/2025</div>
                      </div>
                      <div className="text-right">
                        <div className="font-extrabold text-[13px] text-gray-900">40,34 €</div>
                        <div className="text-[9px] text-gray-400">/mois HT</div>
                      </div>
                    </div>
                  </div>

                  {/* ② Prix kWh */}
                  <div className="border-b border-gray-100">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-100 border-b border-blue-200 text-[9px] font-bold text-blue-800">
                      <NdotBlue n="②" /> Prix au kWh TTC — à reporter dans le formulaire
                    </div>
                    <div className="flex justify-between items-center px-3 py-2 bg-blue-50">
                      <div>
                        <div className="font-semibold text-[10.5px] text-gray-800">Consommation électricité (HT)</div>
                        <div className="text-[9px] text-gray-400 mt-0.5">3 201 kWh · 04/06–03/07/2025</div>
                      </div>
                      <div className="text-right">
                        <div className="font-extrabold text-[13px] text-blue-600">13,636 c€/kWh</div>
                        <div className="text-[9px] text-gray-400">→ 0,2276 €/kWh TTC</div>
                      </div>
                    </div>
                  </div>

                  {/* Taxes */}
                  <div className="flex justify-between items-center px-3 py-1.5 bg-gray-50 border-b border-gray-100">
                    <span className="text-[9.5px] text-gray-400">Taxes (identiques tous fournisseurs)</span>
                    <span className="font-bold text-[10.5px]">114,24 € HT</span>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center px-3 py-2 bg-gray-900">
                    <span className="text-white/70 font-semibold text-[11px]">Total TTC</span>
                    <span className="text-white font-extrabold text-[14px]">702,51 €</span>
                  </div>
                </div>

                {/* Légende */}
                <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                  <div className="text-[10.5px] font-bold text-amber-800 mb-1.5">💡 Où trouver ces infos ?</div>
                  {[
                    { n: '①', label: 'Fournisseur', hint: '— Logo en haut à gauche' },
                    { n: '②', label: 'Prix au kWh TTC', hint: '— Ligne "Consommation" → prix unitaire' },
                    { n: '③', label: 'Abonnement HT', hint: '— Ligne "Abonnement" → montant/mois' },
                    { n: '④', label: 'Option tarifaire', hint: '— Bloc "Données contrat"' },
                    { n: '⑤', label: 'Puissance souscrite', hint: '— Bloc "Données contrat" en kVA' },
                  ].map(({ n, label, hint }) => (
                    <div key={n} className="flex items-start gap-1.5 mb-1 last:mb-0">
                      <NdotAmber n={n} />
                      <div className="text-[10px]">
                        <strong className="text-gray-800">{label}</strong>{' '}
                        <span className="text-gray-400">{hint}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
