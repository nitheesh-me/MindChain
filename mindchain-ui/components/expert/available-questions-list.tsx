"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { QuestionCard } from "./question-card";

// Mock available questions data
const mockAvailableQuestions = [
  {
    id: "q1",
    title: "Need help with Machine Learning project",
    description:
      "I am working on a classification problem and facing issues with model accuracy.",
    category: "academic",
    subcategory: "Machine Learning",
    urgency: "high",
    createdAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    matchScore: 95,
    matchCriteria: ["Machine Learning", "Classification", "Model Accuracy"],
    askedBy: "Rahul Kumar",
  },
  {
    id: "q2",
    title: "Question about VLSI course project",
    description:
      "I need guidance on the final project requirements for the VLSI Design course.",
    category: "academic",
    subcategory: "VLSI Design",
    urgency: "medium",
    createdAt: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
    matchScore: 82,
    matchCriteria: ["VLSI Design", "Course Project", "Electronics"],
    askedBy: "Priya Sharma",
  },
  {
    id: "q3",
    title: "Research collaboration opportunity",
    description:
      "Looking for faculty members interested in collaborating on a research paper about NLP.",
    category: "research",
    subcategory: "Natural Language Processing",
    urgency: "low",
    createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    matchScore: 88,
    matchCriteria: ["NLP", "Research Collaboration", "Academic Paper"],
    askedBy: "Aditya Patel",
  },
  {
    id: "q4",
    title: "Help organizing a technical workshop",
    description:
      "Need assistance in organizing a workshop on web development for first-year students.",
    category: "event",
    subcategory: "Workshop",
    urgency: "medium",
    createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    matchScore: 75,
    matchCriteria: ["Event Organization", "Web Development", "Workshop"],
    askedBy: "Sneha Gupta",
  },
];

export function AvailableQuestionsList() {
  const [questions, setQuestions] = useState(mockAvailableQuestions);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [minMatchScore, setMinMatchScore] = useState(70);
  const [sortBy, setSortBy] = useState("match");

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    setQuestions(mockAvailableQuestions);
  }, []);

  // Filter and sort questions
  const filteredQuestions = questions
    .filter((q) => {
      // Search filter
      if (
        searchQuery &&
        !q.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !q.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (categoryFilter !== "all" && q.category !== categoryFilter) {
        return false;
      }

      // Match score filter
      if (q.matchScore < minMatchScore) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sort by selected criteria
      switch (sortBy) {
        case "match":
          return b.matchScore - a.matchScore;
        case "recent":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case "urgency":
          const urgencyOrder = { high: 3, medium: 2, low: 1 };
          return (
            urgencyOrder[b.urgency as keyof typeof urgencyOrder] -
            urgencyOrder[a.urgency as keyof typeof urgencyOrder]
          );
        default:
          return 0;
      }
    });

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="rounded-xl">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                className="pl-9 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="rounded-lg">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="research">Research</SelectItem>
                <SelectItem value="event">Event</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="rounded-lg">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match">Match Score</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="urgency">Urgency</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="match-score" className="text-sm">
                Minimum Match Score: {minMatchScore}%
              </Label>
              <span className="text-xs text-muted-foreground">
                Drag to adjust
              </span>
            </div>
            <Slider
              id="match-score"
              min={0}
              max={100}
              step={5}
              value={[minMatchScore]}
              onValueChange={(value) => setMinMatchScore(value[0])}
              className="mt-2"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Available Questions ({filteredQuestions.length})
        </h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="h-4 w-4" />
          <span>Showing questions that match your expertise</span>
        </div>
      </div>

      {filteredQuestions.length === 0 ? (
        <Card className="rounded-xl">
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">
              No questions match your current filters.
            </p>
            <Button
              variant="link"
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("all");
                setMinMatchScore(70);
              }}
            >
              Clear all filters
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      )}
    </div>
  );
}
