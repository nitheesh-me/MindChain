"use client";

import type React from "react";

import { useState } from "react";
import { submitQuery } from "@/lib/api";
import type { Query } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Loader2, Send } from "lucide-react";

interface QueryFormProps {
  userId: string;
  onSubmit: (query: Query) => void;
}

export function QueryForm({ userId, onSubmit }: QueryFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<
    "academic" | "research" | "event" | "other"
  >("academic");
  const [urgency, setUrgency] = useState<"low" | "medium" | "high">("medium");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !description.trim()) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const newQuery = await submitQuery({
        userId,
        title,
        description,
        category,
        urgency,
      });

      onSubmit(newQuery);

      // Reset form
      setTitle("");
      setDescription("");
      setCategory("academic");
      setUrgency("medium");
    } catch (error) {
      console.error("Failed to submit query:", error);
      setError("Failed to submit query. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="title" className="text-base font-medium">
          Query Title
        </Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a brief title for your query"
          disabled={loading}
          required
          autoFocus
          autoComplete="off"
          autoCorrect="on"
          autoCapitalize="sentences"
          className="mt-2 rounded-xl"
        />
      </div>

      <div>
        <Label htmlFor="description" className="text-base font-medium">
          Description
        </Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Provide details about your query"
          rows={4}
          disabled={loading}
          required
          className="mt-2 rounded-xl resize-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="category" className="text-base font-medium">
            Category
          </Label>
          <Select
            value={category}
            onValueChange={(value) =>
              setCategory(value as "academic" | "research" | "event" | "other")
            }
            disabled={loading}
          >
            <SelectTrigger id="category" className="mt-2 rounded-xl">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="academic">Academic</SelectItem>
              <SelectItem value="research">Research</SelectItem>
              <SelectItem value="event">Event</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-base font-medium">Urgency</Label>
          <RadioGroup
            value={urgency}
            onValueChange={(value) =>
              setUrgency(value as "low" | "medium" | "high")
            }
            className="flex space-x-4 mt-2"
            disabled={loading}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="low" id="low" />
              <Label htmlFor="low" className="cursor-pointer">
                Low
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium" className="cursor-pointer">
                Medium
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="high" id="high" />
              <Label htmlFor="high" className="cursor-pointer">
                High
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button type="submit" disabled={loading} className="w-full rounded-xl">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit Query
          </>
        )}
      </Button>
    </form>
  );
}
