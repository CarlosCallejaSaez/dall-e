import React, { useState } from 'react';
import "./Dalle.css";
import { useAuth0 } from '@auth0/auth0-react';

const Dalle = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const API_TOKEN = import.meta.env.VITE_OPENAI_API_KEY;

  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const input = event.target.elements.input.value;
    setPrompt(input);

    try {
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
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className='log-buttons'>
    {!isAuthenticated ? (
      <button onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
    ) : (
      <button onClick={() => logout()}>Cerrar Sesión</button>
    )}
  </div>
    {isAuthenticated &&(<div className='container-dalle'>
      <form className="generate-form mt-2" onSubmit={handleSubmit}>
        <textarea
          name="input"
          placeholder="Write your prompt here..."
          rows="4"
        />
        <button type="submit" className="button" disabled={loading}>
          {loading ? "Generating" : "Generate"}
        </button>
      </form>

      {output && (
        <div>
          <p className='p'>This is the image generated by the prompt:<strong>{prompt}</strong> </p>
          <img src={output} alt="Generated Art" />
          
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
         
        </div>
      )}
    </div>)}
    </>
  );
};

export default Dalle;
