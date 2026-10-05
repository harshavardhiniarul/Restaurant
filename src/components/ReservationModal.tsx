import React, { useState } from 'react';
import { Calendar, Clock, Users, Sparkles, Check, X, Wine, ShieldCheck, ChevronRight } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [guests, setGuests] = useState<number>(2);
  const [experience, setExperience] = useState<'tasting' | 'alacarte'>('tasting');
  const [seatingArea, setSeatingArea] = useState<string>('Main Hearth Dining Room');
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]
  );
  const [selectedTime, setSelectedTime] = useState<string>('7:00 PM');
  const [winePairingCount, setWinePairingCount] = useState<number>(2);

  // Guest details form state
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('Anniversary & Celebration');
  const [dietaryNotes, setDietaryNotes] = useState<string>('');

  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const timeSlots = [
    { time: '5:30 PM', status: 'Available' },
    { time: '6:15 PM', status: 'Available' },
    { time: '7:00 PM', status: 'Few Seats' },
    { time: '7:45 PM', status: 'Few Seats' },
    { time: '8:30 PM', status: 'Available' },
    { time: '9:15 PM', status: 'Available' },
  ];

  const seatingOptions = [
    {
      id: 'Main Hearth Dining Room',
      desc: 'Linen tables with view of the open stone hearth kitchen',
      available: true,
    },
    {
      id: 'Chef’s Counter (Front Row)',
      desc: 'Exclusive eight-seat bar overlooking binchotan woodfire stations',
      available: true,
    },
    {
      id: 'Courtyard Garden Pergola',
      desc: 'Covered botanical terrace warmed by outdoor hearths',
      available: true,
    },
    {
      id: 'Sommelier Vault Booth',
      desc: 'Intimate leather banquette surrounded by temperature-controlled cellar',
      available: true,
    },
  ];

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) return;
    const randomRef = 'AUR-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedBookingId(randomRef);
    setStep(3);
  };

  const handleDownloadCalendar = () => {
    const calendarData = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Aurelia Restaurant//EN\nBEGIN:VEVENT\nSUMMARY:Dinner at Aurelia (${seatingArea})\nDESCRIPTION:Aurelia Gastronomy - ${experience === 'tasting' ? '7-Course Degustation' : 'A La Carte'}. Ref: ${confirmedBookingId}\nLOCATION:428 Vignes St Suite 100, Los Angeles CA\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([calendarData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `aurelia-reservation-${confirmedBookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0c0d0e]/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#141618] border border-white/10 rounded-xl max-w-2xl w-full my-8 text-left shadow-2xl overflow-hidden relative">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0c0d0e]/60">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg tracking-widest uppercase text-[#f4efe8]">
              Aurelia
            </span>
            <span className="text-[#8f887d] text-xs">/</span>
            <span className="text-xs uppercase tracking-[0.14em] text-[#c49758]">
              {step === 3 ? 'Booking Confirmed' : 'Table Reservation'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#8f887d] hover:text-[#f4efe8] rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress Indicator */}
        {step < 3 && (
          <div className="px-6 pt-4 pb-2 border-b border-white/5 flex items-center justify-between text-xs font-mono">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#c49758]' : 'text-[#8f887d]'}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[11px]">1</span>
              <span>Experience & Party</span>
            </div>
            <span className="text-white/10">——</span>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#c49758]' : 'text-[#8f887d]'}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[11px]">2</span>
              <span>Date & Details</span>
            </div>
          </div>
        )}

        {/* Step 1: Experience & Party Size */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-[0.14em] text-[#a8a196] mb-2 font-medium">
                Party Size (Number of Guests)
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuests(num)}
                    className={`py-2.5 rounded font-mono text-sm transition-all ${
                      guests === num
                        ? 'bg-[#c49758] text-[#0c0d0e] font-bold shadow-md'
                        : 'bg-[#0c0d0e] text-[#f4efe8] border border-white/10 hover:border-[#c49758]/50'
                    }`}
                  >
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Selection */}
            <div>
              <label className="block text-xs uppercase tracking-[0.14em] text-[#a8a196] mb-2 font-medium">
                Dining Experience
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  onClick={() => setExperience('tasting')}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    experience === 'tasting'
                      ? 'border-[#c49758] bg-[#c49758]/10'
                      : 'border-white/10 bg-[#0c0d0e] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-base text-[#f4efe8]">
                      7-Course Degustation
                    </span>
                    <span className="font-mono text-xs text-[#c49758]">$265 / guest</span>
                  </div>
                  <p className="text-xs text-[#8f887d] leading-relaxed">
                    Full woodfire tasting journey curated by Chef Elena Vance.
                  </p>
                </div>

                <div
                  onClick={() => setExperience('alacarte')}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    experience === 'alacarte'
                      ? 'border-[#c49758] bg-[#c49758]/10'
                      : 'border-white/10 bg-[#0c0d0e] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-base text-[#f4efe8]">
                      A La Carte Hearth Dining
                    </span>
                    <span className="font-mono text-xs text-[#c49758]">A La Carte</span>
                  </div>
                  <p className="text-xs text-[#8f887d] leading-relaxed">
                    Select your own courses from raw crudo, ember cuts, and botanicals.
                  </p>
                </div>
              </div>
            </div>

            {/* Seating Room Preference */}
            <div>
              <label className="block text-xs uppercase tracking-[0.14em] text-[#a8a196] mb-2 font-medium">
                Seating Atmosphere
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {seatingOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSeatingArea(opt.id)}
                    className={`p-3 text-left rounded border transition-all ${
                      seatingArea === opt.id
                        ? 'border-[#c49758] bg-[#c49758]/10'
                        : 'border-white/5 bg-[#0c0d0e] hover:border-white/15'
                    }`}
                  >
                    <div className="text-sm font-serif text-[#f4efe8] mb-0.5">
                      {opt.id}
                    </div>
                    <div className="text-[11px] text-[#8f887d]">
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] bg-[#c49758] text-[#0c0d0e] hover:bg-[#d4a86b] rounded transition-all flex items-center gap-2"
              >
                <span>Select Date & Time</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Date, Time & Guest Details */}
        {step === 2 && (
          <form onSubmit={handleConfirmReservation} className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] text-[#a8a196] mb-1 font-medium">
                  Reservation Date
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-sm text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.14em] text-[#a8a196] mb-1 font-medium">
                  Dining Seating Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-sm text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot.time} value={slot.time}>
                      {slot.time} ({slot.status})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-2 border-t border-white/5">
              <div className="text-xs uppercase tracking-[0.14em] text-[#c49758] font-mono">
                Guest Contact Coordinates
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Guest Full Name *"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-xs text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address (for calendar confirmation) *"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-xs text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Telephone (for day-of SMS reminder) *"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-xs text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                  />
                </div>
                <div>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-xs text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                  >
                    <option value="Anniversary & Celebration">Anniversary Celebration</option>
                    <option value="Birthday Gathering">Birthday Evening</option>
                    <option value="Executive Dining">Executive Dinner</option>
                    <option value="Intimate Date Night">Intimate Date Night</option>
                    <option value="Gastronomy Enthusiast Pilgrimage">Gastronomic Pilgrimage</option>
                  </select>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Dietary allergies or dietary preferences (e.g. Pescatarian, Gluten-Free)..."
                  value={dietaryNotes}
                  onChange={(e) => setDietaryNotes(e.target.value)}
                  className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-xs text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                />
              </div>
            </div>

            {/* Wine Pairing Pre-selection */}
            {experience === 'tasting' && (
              <div className="p-3 bg-[#0c0d0e] rounded border border-[#c49758]/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Wine className="w-4 h-4 text-[#c49758]" />
                  <div>
                    <span className="text-[#f4efe8] font-medium block">
                      Include Sommelier Reserve Pairing
                    </span>
                    <span className="text-[#8f887d] text-[11px]">
                      $165 per guest · Handcrafted Old & New World vintages
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={winePairingCount}
                    onChange={(e) => setWinePairingCount(Number(e.target.value))}
                    className="bg-[#141618] border border-white/10 text-xs px-2 py-1 rounded text-[#f4efe8]"
                  >
                    {[...Array(guests + 1)].map((_, i) => (
                      <option key={i} value={i}>
                        {i === 0 ? 'None' : `${i} Pairing${i > 1 ? 's' : ''}`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs uppercase tracking-wider text-[#8f887d] hover:text-[#f4efe8]"
              >
                Back to Seating
              </button>

              <button
                type="submit"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] bg-[#c49758] text-[#0c0d0e] hover:bg-[#d4a86b] rounded transition-all active:scale-[0.98]"
              >
                Confirm Table Reservation
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Instant Confirmation Card */}
        {step === 3 && (
          <div className="p-6 sm:p-8 text-center space-y-6 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-[#c49758]/20 text-[#c49758] flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.25em] font-mono text-[#c49758] mb-1">
                Booking Reference: {confirmedBookingId}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#f4efe8]">
                We Look Forward to Welcoming You
              </h3>
              <p className="text-xs text-[#a8a196] mt-2">
                A formal dining dossier has been dispatched to <strong>{guestEmail}</strong>.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="max-w-md mx-auto bg-[#0c0d0e] border border-white/10 rounded-lg p-5 text-left text-xs space-y-3">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8f887d]">Guest:</span>
                <span className="text-[#f4efe8] font-medium">{guestName}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8f887d]">Party & Atmosphere:</span>
                <span className="text-[#f4efe8] font-medium">{guests} Guests · {seatingArea}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8f887d]">Date & Service:</span>
                <span className="text-[#f4efe8] font-medium">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8f887d]">Experience:</span>
                <span className="text-[#c49758] font-medium">
                  {experience === 'tasting' ? '7-Course Degustation' : 'A La Carte Hearth'}
                </span>
              </div>
              {dietaryNotes && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#8f887d]">Dietary Notes:</span>
                  <span className="text-[#f4efe8]">{dietaryNotes}</span>
                </div>
              )}
              <div className="pt-1 text-[11px] text-[#7d776e]">
                ✦ Complimentary valet at 428 Vignes St.
                <br />
                ✦ Cancellation is complimentary up to 48 hours prior to reservation.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleDownloadCalendar}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-[#f4efe8] rounded transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Add to Calendar (.ics)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#c49758] text-[#0c0d0e] hover:bg-[#d4a86b] rounded transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
