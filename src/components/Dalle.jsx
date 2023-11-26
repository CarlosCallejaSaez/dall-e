import React, { useState } from 'react';

const Dalle = () => {

    const API_TOKEN = "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";

    const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [prompt, setPrompt] = useState("")
  const [imageFile, setImageFile] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const input = event.target.elements.input.value;
    setPrompt(input)
    const response = await fetch(
      "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }
    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setImageFile(new File([blob], "art.png", { type: "image/png" }));
    setLoading(false);
  };

  return (

    <>
    <form className="generate-form mt-2" onSubmit={handleSubmit}>
      <input type="text" name="input" placeholder="Escribe tu prompt aquí..." />
      <button type="submit" className="button" disabled={loading}>
        {loading ? "Generando..." : "Generar"}
      </button>
    </form>
    
    {output && <img src={output} alt="Generated Art" />}
  </>
  )
}

export default Dalle