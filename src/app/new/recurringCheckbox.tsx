'use client';
import React, { useState } from "react";

export default function RecurringCheckbox() {
  const [recurring, setRecurring] = useState(false);

  return (
    <input name="recurring" type="checkbox" checked={recurring} onChange={e => setRecurring(!recurring)}></input> 
  )
};
