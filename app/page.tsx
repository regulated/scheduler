"use client";

import { useState, useEffect, useMemo } from "react";

import { Field, FieldSet, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "cn"

import { Brain, Cog, BookCheck, BookOpenText, LayoutFreeform, Boxes } from "lucide-react"

export default function Home() {
  const [time, setTime] = useState<Date>(new Date());
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = useMemo<string>(() => {
    if (!mounted) return "";
    const hours = (time.getHours() % 12 || 12).toString().padStart(2, "0"); 
    const minutes = time.getMinutes().toString().padStart(2, "0"); 
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`; 
  }, [time, mounted]); 

  const minutes = useMemo<number>(() => {
    if (!mounted) return 0;
    return time.getMinutes();
  }, [time, mounted]);

  const [selectedValue, setSelectedValue] = useState("first");
  
  return (
    <div className="flex m-12 justify-center items-center flex-col">

      <RadioGroup defaultValue="first" value={selectedValue} onValueChange={setSelectedValue} className="max-w-m flex flex-col md:flex-row justify-between">
        
          <FieldSet className={cn(
              "w-full",
              (minutes < 10 && selectedValue != "first")
                ? "text-unselected bg-secondary" 
                : "")}>
            <FieldLabel htmlFor="r1" >
              <Field orientation="vertical">
                <FieldContent>
                  <Brain />
                  <FieldDescription>Aprender</FieldDescription>
                </FieldContent>
                  <RadioGroupItem value="first" id="r1" />
              </Field>
            </FieldLabel>
          </FieldSet>
              
          <FieldSet className={cn(
              "w-full",
              (minutes >= 10 && minutes < 20 && selectedValue != "second")
                ? "text-unselected bg-secondary w-full" 
                : "w-full")}>
            <FieldLabel htmlFor="r2">
              <Field orientation="vertical">
                <FieldContent>
                  <FieldTitle><Cog /></FieldTitle>
                  <FieldDescription>Construir</FieldDescription>
                </FieldContent>
                  <RadioGroupItem value="second" id="r2" />
              </Field>
            </FieldLabel>
          </FieldSet>

          <FieldSet className={cn(
              "w-full",
              (minutes >= 20 && minutes < 30 && selectedValue != "third")
                ? "text-unselected bg-secondary w-full" 
                : "w-full")}>
            <FieldLabel htmlFor="r3">
              <Field orientation="vertical">
                <FieldContent>
                  <FieldTitle><LayoutFreeform /></FieldTitle>
                  <FieldDescription>Multi</FieldDescription>
                </FieldContent>
                  <RadioGroupItem value="third" id="r3" />
              </Field>
            </FieldLabel>
          </FieldSet>

          <FieldSet className={cn(
              "w-full",
              (minutes >= 30 && minutes < 40 && selectedValue != "fourth")
                ? "text-unselected bg-secondary w-full" 
                : "w-full")}>
            <FieldLabel htmlFor="r4">
              <Field orientation="vertical">
                <FieldContent>
                  <FieldTitle><BookCheck /></FieldTitle>
                  <FieldDescription>Boletos!!!</FieldDescription>
                </FieldContent>
                  <RadioGroupItem value="fourth" id="r4" />
              </Field>
            </FieldLabel>
          </FieldSet>
            
          <FieldSet className={cn(
              "w-full",
              (minutes >= 40 && minutes < 50 && selectedValue != "fifth")
                ? "text-unselected bg-secondary w-full" 
                : "w-full")}>
            <FieldLabel htmlFor="r5">
              <Field orientation="vertical">
                <FieldContent>
                  <FieldTitle><BookOpenText /></FieldTitle>
                  <FieldDescription>Leer</FieldDescription>
                </FieldContent>
                  <RadioGroupItem value="fifth" id="r5" />
              </Field>
            </FieldLabel>
          </FieldSet>

          <FieldSet className={cn(
              "w-full",
              (minutes >= 50 && selectedValue != "sixth")
                ? "text-unselected bg-secondary w-full" 
                : "w-full")}>
            <FieldLabel htmlFor="r6">
              <Field orientation="vertical">
                <FieldContent>
                  <FieldTitle><Boxes /></FieldTitle>
                  <FieldDescription>Multi</FieldDescription>
                </FieldContent>
                  <RadioGroupItem value="sixth" id="r6" />
              </Field>
            </FieldLabel>
          </FieldSet>
        
        </RadioGroup>

        <div className="p-4">{formattedTime}</div>

      
    </div>
  );
}
