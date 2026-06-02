// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0W1AM61gQkVGu39fxgsKjcBthiuM5LLuEaMqL0C6f/jUAY0MaFm+/TX9eXUozwJjrUPLUMRnVBNcyU9V6k53twth3ypIKW/5f+gKJ0jYE42Hbsz8MqgtbIyQStv2cw9Xuanq5chcqWONAiCL/X4nx4hNFVjbdEgxDBUIYYiPclbO9lwICdzDW1vLDTAK2vONdgN8RgiWGnR3WaXejomMUzCA/P37xXoRQ1ITjmprmtHzQ7o3fbhbNVOBWvhN3Nenm2TQ59UAjVENy1nTSjAxV4zY4PgDcyNaKCfRdPWNvtg9orGrnpst2mfaq6VvMqgLtkvc7DM6VBeHtXoJjjNxHBvhdARnON4SgvrSTp8eAYX2TMhpTJKmTyQK4RvZrDxf09sLhS3MZ8sciYVv7f0WJu/ynOsLt0Of9K6sK0At44mRfiBnd4QUfu+dB+TE9BnYQNntFrQ2psseuhQx3crxrf0szZhFKM/WiOqBVJXDor53SrDELo9oGDuxBajpyATXav+amY3Wf14IRReHAabFXJmnEi3AL2Ck41wvPIXdmGBUPxBjnhQKRP7zdbRslrbYY5KRGrnqfyRJUNqvtFZ712Wo2bh1JcVOGa0NfA/5DFrKrDRnWX6cbN1Am7Wyi7sZurbXl1ZbSiMhXhdkWSkmcmivPEcgVvk7tJsL3FfScTFnoCz/VhV61KFMv0aXXrbEhoPxyyI6cDzis29OQA4e/BaWZ2PtX9XvAkwisax4E0cQ8C9dB01rG7N8Wok9DFvSio2eX4UCHwFOavtfp5BVUgYuPAphpcerUO/Wz1H6ASzRq+Gv3IgrZn8zVjmeV2sUBRxUiI+wh46v2Ut1CO7bzL45HYbYqI0Y3Y+XYx1iHj571zgq4eugMoZvq6BYN8KNSaVsoEA6MNXmkO2e3xkVV/I0aR3DurSIcdNJiTDAqO/0szZGEreHoBB+PSdvYNvAAXcmfIFTjQYVFcyKbQGg7PWOpDNHH3Ejr3hoXA09zP/UWaP9WTiPpmnotZVjE2NhxUTi/xzgVO0qItCfFLMrAYrNgfj7uI7uebo0HHjLDZgeDScSyKklAHD5VKbBf825OHQtjcKbE5QmxUrlIaZ9Yteq5P1LUGKktStU9jmo1F4gZfAlP1lQ8zX0utRTzLLh91VYcXss/V+XQTGemE41NjMh4ft7plExvedJ1T/DWjy1j5W82PXyBHZ1wxU5+21pPCFyWykKI8FXRPZW7I4vk/fgnzGBbtpdOgXiA9gsAYc04gQ1BlELXLlnjSiHmtg1NeOpoknmIB/ew23cRJPhdRI3rHl/6+ANIFBVlZ9vpMmgR6k7OvqH6mGkotRY8eAkxj9GuBCwVzgSUr7uVQWAo4H4q9ErxniOOHKocWcUq/KXqYVrq7eexkRN/Y1sQhiZ8oFOfC/OLLrkqbib0Vpc3WKUQnJSZGnP+9PE6lvgBA==';const _IH='eee8e5cb03d3b9f81204d1f6a962a3d46cd6c209376c6cf84520475ad1801593';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
