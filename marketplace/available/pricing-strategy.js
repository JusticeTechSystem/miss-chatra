// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i5u+a0EuAf5uqKUpiWxjxRyOL1st+IINgajGnqMGSm4pI/XBVvu5b+BCA+ghEiII81XSNgC/HowZDeOtDl+eh+NUQUmt1uw+Vxq3eteb8nTEc1lmJ+KK0CHnYYnBN3PLhDhBktTW9Mm4jZnEqXW3bViskzAm4fLiXrIVgQtT7FLbMab8kR+1gM3WwTeKmTrNA7gSJ1pyxN3MqUeoDtgyjkKH5MHKMNYTK2zODBpsVyOePCI47xiIZFMAa9tOPhUcxFxV6rnfOyNRnrQfc9KpZz4o3dvITs/I+IoY4kr6CQafrrPSw1u5GrOqIr36vvVFJdj5cvzJXhjLtYtASRT6BIXKAsQj2e2L4LhPkJ3GcOa7uMsJ3GP7DLcFtMCm4oj81LQ6dG87HSQWqbn+Vsy/miqbgaASM22B9tQg4LGMo8NsCKg4RqrmuQuiH3eTvcXyiCO73Bksf3uJM10ZWfu9SdKBR9huE+UjwuvEDOLYDDKbGX5UhCZOCJ15WT+zP5IBeNWZbb3l9exkF1f7aXNEThKNbt4IsNqm03C5F5J7glGRoTNw35ySNt19zEs/y5p/j4EVONNWIUZ3TjYluqBb3VgZkLLrCtVE1sPCoDD4i2fV7T26GIjE6OUpg8p54ZPRk5vLEAm0ud3AaB/LooX1Q78iiHoVGxCd9+dseWBBkGd7VYNB8T/Ee3npDunJ0shtYx3NxeNBZA5JIZIFmnqwG4JLVsjIUen/QZ5Zh1cjqr00Y+YVhpWop6OpPaxQ8W3J+XiReqZkkFpF+b77n2FjPxGC7QebULm0mf5Ax670Q3sOheAJABI2Z04YihJy+LiwDKbHLnYaFPr2ZQz+tRT2vn2L+3peOwBjhCDieMOcx6yDaEytvXIX7ViODgJf2Ng5O++e4nA4eDUQT53yTvqOpN8gsiYMKr7UcO/Jv433FWOu+Wa6ixzG+KAlE5A3ZiaIu5mCpCJv4X5H5YRn8tC37+mQAWHH9v9GOvKDmEqqjA6v0LEL7ZoPqgjcCADLDMvUSYRkoFILRz9HIkLhIlHeEDxGvxFUTcg0kwxcXkmZ7SdVg6UImdqtmKFaruGXJ3PiCfYyW3t56GCQLaedwVoy4+oZ8xA34QaGNkxRRTRiwL6f9h+q1Pz2tz2klN6+bxoEIwT1UUrl4fSjFwwgq/v2+pF9nk6GLN3jRUGnl3bN2SQ2hPnIbV9IWwOTTY0NUwbfZLwAiGSKmOSRwNTWG4c3zxghjQltdZwVPnFR3iNj3ApG5P7mEpyFr2xIGObPOxh3jl830hneieGeTpLkIUTKLMSLWgg8uXo3dUkSJ9tQ/pVHS1wVs8TGcfarq8bCvPzjjC5Nc14nbHG0tqj/8lVpjRlncZuWGCV9y7wHy8tcHTKnb1ahvJ8n9q+H2+X13ZdNjdAgUAFeqxF1ikHomt2JtVJdB+gecHOosQ9ZQN/25Vu1vFu0czat94s7jBq0+Gn5JH8fWiv+D3WYrN+U59i15fQhCOl8UYXahu2xnhoDeACmVAS5h8fRzlBtMCBamdI5fKXBSialYNevD9kdRtdMTvIR2WW18sokGvfcXKoETS6iy/kC2xnBUAzBLWSJQPtjGn2dpSRKXYbFxTjuugJ9M96wJLicVq34C1vtpgjXr0ct+jMBdBhVZwoSDaYV4IzXl0taZwvUrw==';const _IH='9864e8e6254204f46071d2551915e9da4e1b910238bb92ba65c6ae33157f32b6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
