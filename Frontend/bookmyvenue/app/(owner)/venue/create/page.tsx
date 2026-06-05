'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  IconArrowLeft,
  IconBuilding,
  IconCash,
  IconUsers,
  IconToolsKitchen2,
  IconParking,
  IconPlayBasketball,
  IconAirConditioning,
  IconWifi,
  IconVolume,
  IconBattery,
  IconMovie,
  IconPlus,
  IconTrash,
  IconUpload,
  IconCheck,
  IconHelpCircle
} from '@tabler/icons-react'

// --- Types & Constants ---

interface AmenityOption {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface CategoryOption {
  id: string;
  name: string;
}

const AMENITIES_OPTIONS: AmenityOption[] = [
  { id: 'kitchen', name: 'Kitchen Facility', icon: <IconToolsKitchen2 size={22} /> },
  { id: 'parking', name: 'Parking Space', icon: <IconParking size={22} /> },
  { id: 'playarea', name: 'Play Area', icon: <IconPlayBasketball size={22} /> },
  { id: 'ac', name: 'Air Conditioning', icon: <IconAirConditioning size={22} /> },
  { id: 'wifi', name: 'Internet / Wifi', icon: <IconWifi size={22} /> },
  { id: 'sound', name: 'Sound System', icon: <IconVolume size={22} /> },
  { id: 'power', name: 'Power Backup', icon: <IconBattery size={22} /> },
  { id: 'stage', name: 'Stage Setup', icon: <IconMovie size={22} /> },
];

const CATEGORY_OPTIONS: CategoryOption[] = [
  { id: 'wedding', name: 'Wedding' },
  { id: 'birthday', name: 'Birthday' },
  { id: 'conference', name: 'Conference' },
  { id: 'meetup', name: 'Meetup' },
  { id: 'workshop', name: 'Workshop' },
  { id: 'party', name: 'Party' },
];

// Pre-populated quick mock images for testing
const MOCK_GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=600",
  "https://www.alsajconventioncenter.com/wp-content/uploads/2023/07/Arena.png",
];

function CreateVenuePage() {
  // Form Field States
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [cityName, setCityName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const [stateName, setStateName] = useState('');
  const [country, setCountry] = useState('India');
  const [description, setDescription] = useState('');
  const [hourlyRent, setHourlyRent] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');

  // Selection States
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Media Upload Simulation States
  const [coverImage, setCoverImage] = useState<string>('');
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  // Page Lifecycle States
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [loadingStage, setLoadingStage] = useState('');

  // Cancellation Policy States
  const [allowCancellation, setAllowCancellation] = useState(false);
  const [cancellationHours, setCancellationHours] = useState('24');
  const [refundPercentage, setRefundPercentage] = useState('100');


  // Handle selections
  const toggleAmenity = (id: string) => {
    setSelectedAmenities(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Cover image file helper
  const handleCoverSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const simulatedUrl = URL.createObjectURL(file);
      setCoverImage(simulatedUrl);
    }
  };

  const setQuickCover = (url: string) => {
    setCoverImage(url);
  };

  // Gallery multi-photo helper
  const triggerGalleryAdd = () => {
    // Generate a random mockup image from unsplash/mock list to simulate upload
    const randomIdx = Math.floor(Math.random() * MOCK_GALLERY_IMAGES.length);
    const selectedUrl = MOCK_GALLERY_IMAGES[randomIdx];
    // Add multiple copies if requested, simulating "as long as photos"
    setGalleryImages(prev => [...prev, selectedUrl]);
  };

  const removeGalleryPhoto = (index: number) => {
    setGalleryImages(prev => prev.filter((_, idx) => idx !== index));
  };

  // Form submission simulation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !location || !cityName || !hourlyRent || !maxCapacity) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitStatus('loading');

    // Simulate pipeline validation/upload stages
    setLoadingStage('Analyzing metadata parameters...');
    setTimeout(() => {
      setLoadingStage('Compressing cover image & gallery streams...');
      setTimeout(() => {
        setLoadingStage('Routing payload to administrator review queue...');
        setTimeout(() => {
          setSubmitStatus('success');
        }, 1200);
      }, 1000);
    }, 800);
  };

  if (submitStatus === 'success') {
    return (
      <div className="w-full px-4 md:max-w-2xl mx-auto my-12 font-sans animate-fade-in">
        <Card className="border border-border bg-background shadow-2xl rounded-2xl overflow-hidden">
          <div className="bg-primary/5 py-8 text-center border-b border-border flex flex-col items-center justify-center gap-2">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <IconCheck size={36} stroke={3} />
            </div>
            <h1 className="text-2xl font-heading font-extrabold text-foreground mt-2">
              Venue Submitted Successfully!
            </h1>
            <p className="text-sm text-muted-foreground max-w-sm px-4">
              Your venue listing request has been logged and forwarded to the administrator dashboard.
            </p>
          </div>
          <CardContent className="p-6 flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-md text-foreground border-b pb-2 mb-4">Submission Summary</h3>
              <div className="grid grid-cols-2 gap-4 text-sm font-medium">
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wide">Venue Name</span>
                  <span className="text-foreground text-md font-bold">{name}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wide">Hourly Rate</span>
                  <span className="text-primary text-md font-bold font-mono">${hourlyRent}/hr</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wide">Max Seating Capacity</span>
                  <span className="text-foreground text-md font-bold font-mono">{maxCapacity} Seats</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wide">Location</span>
                  <span className="text-foreground text-md">{location}, {cityName}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wide">Cancellation Policy</span>
                  <span className="text-foreground text-md font-bold">
                    {allowCancellation ? `${cancellationHours}h before (${refundPercentage}% refund)` : 'Not Allowed'}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs leading-relaxed flex gap-2">
              <div className="flex-shrink-0 mt-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
              </div>
              <div>
                <strong>Awaiting Verification Step</strong>: Administrative vetting takes approximately 24 to 48 business hours. You can monitor the approval trajectory status on your dashboard queue logs.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/dashboard" className="w-full">
                <Button className="w-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 h-10">
                  Return to Dashboard
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => {
                  setName('');
                  setLocation('');
                  setCityName('');
                  setDistrictName('');
                  setStateName('');
                  setCountry('India');
                  setDescription('');
                  setHourlyRent('');
                  setMaxCapacity('');
                  setAllowCancellation(false);
                  setCancellationHours('24');
                  setRefundPercentage('100');
                  setSelectedAmenities([]);
                  setSelectedCategories([]);
                  setCoverImage('');
                  setGalleryImages([]);
                  setSubmitStatus('idle');
                }}
                className="w-full font-semibold h-10 border-border"
              >
                List Another Venue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:max-w-7xl mx-auto my-6 flex flex-col gap-6 font-sans">

      {/* Back button and Header banner */}
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <Link href="/dashboard" className="text-xs text-primary font-bold flex items-center gap-1 hover:underline w-fit">
          <IconArrowLeft size={14} /> Back to Dashboard
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-2">
          <div>
            <h1 className="text-3xl font-heading font-extrabold tracking-tight text-foreground flex items-center gap-2">
              List Your Venue
            </h1>
            <p className="text-muted-foreground">
              Provide the structural parameters, pricing details, amenities list, and visual media to create your listing.
            </p>
          </div>
          <Badge variant="outline" className="border-primary text-primary font-bold">
            Listing Creator Mode
          </Badge>
        </div>
      </div>

      {submitStatus === 'loading' ? (
        <div className="w-full min-h-[400px] flex flex-col items-center justify-center gap-4 bg-secondary/20 rounded-2xl border border-border py-20">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-muted border-t-primary animate-spin"></div>
          </div>
          <div className="flex flex-col items-center gap-1.5 mt-2 text-center px-4">
            <h3 className="font-bold text-lg text-foreground">Publishing Venue</h3>
            <p className="text-sm text-primary font-mono animate-pulse">{loadingStage}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT COLUMN: Input form details (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Basic Specifications Card */}
            <Card className="border-border dark:bg-secondary/30">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Basic Information</CardTitle>
                <CardDescription>Primary identification details and metrics</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="venueName" className="font-semibold text-xs text-foreground uppercase tracking-wide">
                      Venue Name *
                    </Label>
                    <Input
                      id="venueName"
                      placeholder="e.g. Al Saj Convention Arena"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="venueLoc" className="font-semibold text-xs text-foreground uppercase tracking-wide">
                      Street Location / Neighborhood *
                    </Label>
                    <Input
                      id="venueLoc"
                      placeholder="e.g. Kazhakkoottam, Near Bypass Road"
                      value={location}
                      onChange={e => setLocation(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="hourlyRent" className="font-semibold text-xs text-foreground uppercase tracking-wide flex items-center gap-1">
                      <IconCash size={14} className="text-primary" /> Hourly Rent ($USD) *
                    </Label>
                    <Input
                      id="hourlyRent"
                      type="number"
                      placeholder="e.g. 150"
                      value={hourlyRent}
                      onChange={e => setHourlyRent(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="maxCapacity" className="font-semibold text-xs text-foreground uppercase tracking-wide flex items-center gap-1">
                      <IconUsers size={14} className="text-primary" /> Max Seating Capacity *
                    </Label>
                    <Input
                      id="maxCapacity"
                      type="number"
                      placeholder="e.g. 500"
                      value={maxCapacity}
                      onChange={e => setMaxCapacity(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Geographical Hierarchy Card */}
            <Card className="border-border dark:bg-secondary/30">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Geographical Details</CardTitle>
                <CardDescription>Specify the region parameters for location routing</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="cityName" className="font-semibold text-xs text-foreground uppercase tracking-wide">
                    City Name *
                  </Label>
                  <Input
                    id="cityName"
                    placeholder="Trivandrum"
                    value={cityName}
                    onChange={e => setCityName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="districtName" className="font-semibold text-xs text-foreground uppercase tracking-wide">
                    District Name
                  </Label>
                  <Input
                    id="districtName"
                    placeholder="Thiruvananthapuram"
                    value={districtName}
                    onChange={e => setDistrictName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="stateName" className="font-semibold text-xs text-foreground uppercase tracking-wide">
                    State Name
                  </Label>
                  <Input
                    id="stateName"
                    placeholder="Kerala"
                    value={stateName}
                    onChange={e => setStateName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="country" className="font-semibold text-xs text-foreground uppercase tracking-wide">
                    Country
                  </Label>
                  <Input
                    id="country"
                    placeholder="India"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Description Textarea Card */}
            <Card className="border-border dark:bg-secondary/30">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Venue Description</CardTitle>
                <CardDescription>Tell prospective clients about the unique values of your space</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="description" className="font-semibold text-xs text-foreground uppercase tracking-wide">
                    Detailed Summary
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Al Saj Convention Group is an international provider of venues for all kinds of events in your life. Let your valuable moments of life be made precious with us..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className="min-h-32 text-left align-top placeholder:text-muted-foreground/60"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Cancellation Policy Card */}
            <Card className="border-border dark:bg-secondary/30">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Cancellation Policy</CardTitle>
                <CardDescription>Configure terms and parameters for booking cancellations</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="font-semibold text-xs text-foreground uppercase tracking-wide">
                    Are you willing to allow cancellation for this venue?
                  </Label>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <button
                      type="button"
                      onClick={() => setAllowCancellation(true)}
                      className={`p-3 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${allowCancellation ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-border bg-background dark:bg-neutral-900 text-muted-foreground hover:text-foreground'}`}
                    >
                      <span className="text-sm select-none">Yes, allow cancellation</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setAllowCancellation(false)}
                      className={`p-3 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${!allowCancellation ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-border bg-background dark:bg-neutral-900 text-muted-foreground hover:text-foreground'}`}
                    >
                      <span className="text-sm select-none">No cancellation allowed</span>
                    </button>
                  </div>
                </div>

                {allowCancellation && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border/50 animate-fade-in">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="cancelHours" className="font-semibold text-xs text-foreground uppercase tracking-wide">
                        Cancellation Window (Hours) *
                      </Label>
                      <div className="relative">
                        <Input
                          id="cancelHours"
                          type="number"
                          min="1"
                          placeholder="e.g. 24"
                          value={cancellationHours}
                          onChange={e => setCancellationHours(e.target.value)}
                          required={allowCancellation}
                        />
                        <span className="absolute right-3 top-1 text-xs text-muted-foreground select-none pointer-events-none mt-1">
                          hours before
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">
                        Minimum lead time required before the event starts to cancel.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="refundPercent" className="font-semibold text-xs text-foreground uppercase tracking-wide">
                        Required Refund Percentage (%) *
                      </Label>
                      <div className="relative">
                        <Input
                          id="refundPercent"
                          type="number"
                          min="0"
                          max="100"
                          placeholder="e.g. 80"
                          value={refundPercentage}
                          onChange={e => setRefundPercentage(e.target.value)}
                          required={allowCancellation}
                        />
                        <span className="absolute right-3 top-1 text-xs text-muted-foreground select-none pointer-events-none mt-1">
                          % refund
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">
                        Percentage of rent amount that will used as fine.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Interactive Amenities and Categories Selection Card */}
            <Card className="border-border dark:bg-secondary/30">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Amenities & Event Categories</CardTitle>
                <CardDescription>Select all features and classifications matching your listing</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">

                {/* Amenities Toggle grid */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-xs uppercase tracking-wide text-foreground flex items-center gap-1.5">
                    What This Place Offers
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {AMENITIES_OPTIONS.map((opt) => {
                      const isSelected = selectedAmenities.includes(opt.id);
                      return (
                        <div
                          key={opt.id}
                          onClick={() => toggleAmenity(opt.id)}
                          className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center gap-2 cursor-pointer transition-all duration-300 ${isSelected ? 'border-primary bg-primary/5 text-primary scale-95 shadow-md shadow-primary/5' : 'border-border bg-background dark:bg-neutral-900 text-muted-foreground hover:text-foreground hover:border-muted-foreground/45'}`}
                        >
                          <div className={`p-2 rounded-full transition-colors ${isSelected ? 'bg-primary/10 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                            {opt.icon}
                          </div>
                          <span className="text-xs font-semibold select-none">{opt.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Categories badges selection */}
                <div className="flex flex-col gap-3 border-t border-border pt-4">
                  <h4 className="font-bold text-xs uppercase tracking-wide text-foreground">
                    Classification Category Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORY_OPTIONS.map((opt) => {
                      const isSelected = selectedCategories.includes(opt.id);
                      return (
                        <span
                          key={opt.id}
                          onClick={() => toggleCategory(opt.id)}
                          className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer border select-none transition-all duration-300 ${isSelected ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'bg-secondary text-secondary-foreground border-border hover:bg-muted'}`}
                        >
                          {opt.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

              </CardContent>
            </Card>

          </div>

          {/* RIGHT COLUMN: Media Upload & Submission Actions (1 Col) */}
          <div className="flex flex-col gap-6">

            {/* Cover Image Upload Card */}
            <Card className="border-border dark:bg-secondary/30">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Cover Image</CardTitle>
                <CardDescription>Primary banner photograph of the location</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {coverImage ? (
                  <div className="relative aspect-video w-full h-44 rounded-xl overflow-hidden border border-border group">
                    <img
                      src={coverImage}
                      alt="Cover preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => setCoverImage('')}
                        className="bg-red-600 text-white font-semibold flex items-center gap-1.5 py-1 px-3"
                      >
                        <IconTrash size={16} /> Remove Cover
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-border rounded-xl aspect-video w-full h-44 flex flex-col items-center justify-center text-center gap-2 bg-secondary/15 dark:bg-neutral-900/35 p-4 hover:border-primary/45 transition-colors">
                    <IconUpload size={32} className="text-muted-foreground" />
                    <div className="flex flex-col gap-0.5 text-xs">
                      <span className="font-semibold text-foreground">Click to simulated upload</span>
                      <span className="text-muted-foreground">Supports JPEG, PNG up to 10MB</span>
                    </div>

                    <input
                      type="file"
                      id="coverImageUpload"
                      accept="image/*"
                      onChange={handleCoverSelect}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => document.getElementById('coverImageUpload')?.click()}
                      className="mt-1.5 bg-primary text-primary-foreground font-semibold"
                    >
                      Choose File
                    </Button>
                  </div>
                )}

                {/* Quick mock selector to bypass file uploading */}
                <div className="flex flex-col gap-2 border-t border-border/80 pt-3">
                  <span className="text-[10px] uppercase font-bold tracking-wide text-muted-foreground flex items-center gap-1">
                    <IconHelpCircle size={12} /> Or select quick mockup cover
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {MOCK_GALLERY_IMAGES.map((url, idx) => (
                      <div
                        key={idx}
                        onClick={() => setQuickCover(url)}
                        className={`aspect-video rounded-lg overflow-hidden border cursor-pointer hover:scale-105 transition-transform ${coverImage === url ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`}
                      >
                        <img src={url} alt="Mock thumb" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Gallery Upload Card */}
            <Card className="border-border dark:bg-secondary/30">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Gallery Photos</CardTitle>
                <CardDescription>Attach as many visual representations as you want</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">

                {/* Gallery photo items grid */}
                <div className="grid grid-cols-3 gap-2">
                  {galleryImages.map((url, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden border border-border group"
                    >
                      <img
                        src={url}
                        alt={`Gallery ${index}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeGalleryPhoto(index)}
                        className="absolute top-1 right-1 p-1 bg-black/60 hover:bg-red-600 rounded-md text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <IconTrash size={12} />
                      </button>
                    </div>
                  ))}

                  {/* Add (+) photo interactive slot */}
                  <div
                    onClick={triggerGalleryAdd}
                    className="border-2 border-dashed border-border rounded-lg aspect-square flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/45 hover:bg-secondary/20 text-muted-foreground hover:text-foreground transition-all select-none"
                  >
                    <IconPlus size={24} />
                    <span className="text-[10px] font-semibold mt-1">Add Photo</span>
                  </div>
                </div>

                <div className="text-[10px] text-muted-foreground leading-relaxed italic bg-secondary/50 dark:bg-neutral-900/40 p-2 rounded-lg">
                  Click the <strong>Add Photo</strong> card to dynamically simulate uploading custom gallery images. You can repeat this process to attach as many photos as desired.
                </div>

              </CardContent>
            </Card>

            {/* Publish & Submission triggers */}
            <Card className="border-border dark:bg-secondary/30">
              <CardContent className="p-4 flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/95 h-11 text-md shadow-lg shadow-primary/10 cursor-pointer"
                >
                  List Venue for Review
                </Button>
                <Link href="/dashboard" className="w-full">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-border font-semibold h-10"
                  >
                    Discard and Cancel
                  </Button>
                </Link>
              </CardContent>
            </Card>

          </div>

        </form>
      )}

    </div>
  );
}

export default CreateVenuePage
