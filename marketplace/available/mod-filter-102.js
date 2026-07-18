// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7WGYudAuZMC0xU+Wle/HFLkmNePNkybD8WLCqaRU6iMeK+qcx8AXWJNEJolPSFMN3PJefFEcCzTkXdA9+FPYenkQL7hgEb6CnXKhLbQnJGwvuqajGs1V15mLgdVS9w3jMaz2fEqyZ5E/ko0MAW8Bka4D4Q2ebVTyNjss/0T4gbzvrfGlnUO2ganXLA1jTSaFM7KKQ2eJV9AydcYIJeQQZ9+7WgmOIc3mWUXBIgjlmkKZElLTV9VSSG56HsPzGLCrL28CPrEohOizbjsEjdnxJm8m4LM2ilmYd+Buxx8S/6qpxmRxNZrV/R5ENnt4rjwywirkRP6bklct/H9aoMSPHkRa4ytOV016X9LvtiaSDySiYMuKvnRb9nu//TXEoqWAYSBA/8fJzLVfyD8dpPTVxW76oILWFS3w0Shc21arOd88h1Hl/6c0oOvF6+XcwzJjOu/2tm0XpwIVgEl9zLFcvciviV7T6IlPbNBqHUP86J75jT1h5W+Vj02F2ZxCyNLKrQ/fzZen57TXb+wkjE86zyPOchr6VaEHSm9Pmnje0hNWVByn70qXvFt749sM583On9kQTg8BSz4wYBMwCs83uyzmow0SjQmlkmSTXLUU2tK0zSW2auylk9jCTv0Ri8qsIDGEpI//1oGyEnVev6mi1vDkYdwwREbiICp1Fqi55syxFAgdf6dLqyXd19MWTm3+e4OobKHJTkukI/wDH5jNfLD7+5jTAa0Ixdp6MtHA6vpH+wKDFA1hdEaRflvhX2na1eW7QbkMz41beCrsVDaAJIB4F0LlZvmQoz8aVq7RxXu5EgL0Pj6W4nj0NDoUTYpomHREF6oMLd6UhxlJf9Zg3Srl4XKEZ6kF3m7FKGQLbuUrKW/g1mnVkaN0MepCCx/LGPX8UAI4H+rNFsz0jZan4qfmlw5yGAsvrHsiJ8sytXAiXrFB3s/9KO1M+CIASzyQoKE6NUj+aU4b93M83EAvxjlflw5PBOBLZ3ab42gyaEuxYjMEY5Xyg4HN+bRqiEnp+1Kl+No4qemZa220L9LT3yieyfSa8ohS36B9QhOUnMRAEGSMRIUJ7WBBTGqh5glBR+v8HIj+YFu7HQ9L3gqRu7oCPmeGr1b0qlBFoAi8EtxVvPBx3pagn3JrnbHEz3smhLTKyEMUX/le9vdDAxTDHo9dSizPMIUM7XN2bVTheljwcKhHYf2R8o3mYlAn7T4ZaDlaC1FtIRcztv3Kf25fpopxKbvBW6RNY1FhVU+IADDEWSJomVsgnOOIBtGtEnYv4Nqzg+MKlTZ6yubYDk1b+Ve6t8B1HPd0K6140eitSi9DBKKQjPNJGd9xUbTae8HJHCKY6GuXqKzi9nbxHGKd5m4ce3iFHoGurGALl09mCJY4XCnvtw5Cu';const _IH='5c15940b213ffcf8262a1b71a96d137c85e79f59ea0e88486822ab1ffe1f790d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
