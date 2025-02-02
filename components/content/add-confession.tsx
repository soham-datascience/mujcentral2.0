'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from 'axios';

export default function AddConfessionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [confession, setConfession] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !confession.trim()) {
      setError('Name and confession cannot be empty.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await axios.post('/api/confess/add', {
        name: name.trim(),
        confession: confession.trim(),
      });
      console.log('Confession added:', response.data);
      setName('');
      setConfession('');
      setIsOpen(false);
    } catch (err) {
      console.error('Error submitting confession:', err);
      setError('Failed to submit your confession. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="px-8">
          Confess
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-gradient_indigo-purple text-center">
            Add New Confession
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p className="text-center text-sm text-red-500">{error}</p>
          )}
          <div className="space-y-2">
            <Label htmlFor="confession">Your Confession</Label>
            <Textarea
              id="confession"
              name="confession"
              placeholder="Type your confession here..."
              value={confession}
              onChange={(e) => setConfession(e.target.value)}
              disabled={isSubmitting}
              required
            />
            <p className="text-center text-xs text-muted-foreground">
              Please understand that there are certain boundaries to things.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
              required
            />
            <p className="text-center text-xs text-muted-foreground">
              Provided name will be hashed and securely stored in our database
              for security reasons.
            </p>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Confession'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}