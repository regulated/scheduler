"use client";

import { useState, useEffect, useMemo } from "react";

import { Field, FieldSet, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


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
    if (!mounted) return "";
    return time.getMinutes();
  }, [time, mounted]);

  const [selectedValue, setSelectedValue] = useState("first");
  
  return (
    <div className="flex m-12 justify-center items-center flex-col">

      <RadioGroup defaultValue="first" value={selectedValue} onValueChange={setSelectedValue} className="max-w-m flex flex-col-6 justify-between">
        
          <FieldSet className={(minutes < 10 && selectedValue != "first") ? "bg-orange-900 w-full" : "w-full"}>
            <FieldLabel htmlFor="r1" >
              <Field orientation="vertical">
                <FieldContent>
                  <FieldTitle>Problemas</FieldTitle>
                </FieldContent>
                  <RadioGroupItem value="first" id="r1" />
              </Field>
            </FieldLabel>
          </FieldSet>
              
          <FieldSet className={(minutes >= 10 && minutes < 20 && selectedValue != "second") ? "bg-orange-900 w-full" : "w-full"}>
            <FieldLabel htmlFor="r2">
              <Field orientation="vertical">
                <FieldContent>
                  <FieldTitle>Proyectos</FieldTitle>
                </FieldContent>
                  <RadioGroupItem value="second" id="r2" />
              </Field>
            </FieldLabel>
          </FieldSet>

          <FieldSet className={(minutes >= 20 && minutes < 30 && selectedValue != "third") ? "bg-orange-900 w-full" : "w-full"}>
            <FieldLabel htmlFor="r3">
              <Field orientation="vertical">
                <FieldContent>
                  <FieldTitle>Multiarea</FieldTitle>
                </FieldContent>
                  <RadioGroupItem value="third" id="r3" />
              </Field>
            </FieldLabel>
          </FieldSet>

          <FieldSet className={(minutes >= 30 && minutes < 40 && selectedValue != "fourth") ? "bg-orange-900 w-full" : "w-full"}>
            <FieldLabel htmlFor="r4">
              <Field orientation="vertical">
                <FieldContent>
                  <FieldTitle>Boletos!!!</FieldTitle>
                </FieldContent>
                  <RadioGroupItem value="fourth" id="r4" />
              </Field>
            </FieldLabel>
          </FieldSet>
            
          <FieldSet className={(minutes >= 40 && minutes < 50 && selectedValue != "fifth") ? "bg-orange-900 w-full" : " w-full"}>
            <FieldLabel htmlFor="r5">
              <Field orientation="vertical">
                <FieldContent>
                  <FieldTitle>Leer</FieldTitle>
                </FieldContent>
                  <RadioGroupItem value="fifth" id="r5" />
              </Field>
            </FieldLabel>
          </FieldSet>

          <FieldSet className={(minutes >= 50 && selectedValue != "sixth") ? "bg-orange-900 w-full" : " w-full"}>
            <FieldLabel htmlFor="r6">
              <Field orientation="vertical">
                <FieldContent>
                  <FieldTitle>Multiarea</FieldTitle>
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
