// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z8543cWpmHIy23o8QESBQ1J7UkbYw1ny2MWTRdwcHRsY19Vf4EVCUofqhOqBUHMICSLYaH7OxAx7qFuHejA5OHUxHNMCcKi8VZW+xARV/lNlC+XuI5tyIbveex8geVPjVe9TvQHe8oeUJu7NynXVlzIWs4Pt3HfAcvJonu3PksS0liWYwk4KYZYyLrQOpmmZdT5pKVKac6AOKIeicMZQRDmEJTv23yZn6Bmf6W/N62gFYuf/s1AlqvaulxxTWlOWqFXuXL8PClVZ68y0sdUDHIYD42rw46vfoN7EMDOJdpywiGjnymhGooi/EDRbWxL18MO6ZpPnWPBduK9hyC0BWwMkxX3o0cIunFXxrr8VSCvnx9Xx8be3flL4LR23vX9Hy2mDIumgKwJS1fzG6vo5W36GPWs1zrMdruujHah/lUTqhKomIpwRRQldQkMnLkgpG5u5mtN0IRVo+hKSf+teAMh2pAT3nsquY8MgnSVXn2guv6o2QNGFXiJaA0IvgtsQ9FvYsiosaObv8UZop4DZabO/pN/wCywrijUr6jG+nDhtxIkcXTjI22Lxry0PwHgstvIU+J+61QbgJm0/bAAiI2MKSsFPX9JSjG5MnADTRCyAFvHBAX9HEi9U66sRgKrF3F7dx044ZMxrbkk4PLhcEq6ojPTWh8cOZzHpNyxWkVFe4usCgOrpwCrrTLdABg92AUX8j/Sj2m3ds8yrkEvEwPmu9YPL5gyrqBWf3NB8hRAqjgX/737oFbi+d4zqsCbZCJpC/EWu7GMJ0oS7G+sTXhJWfmEMbuHO4vraANqctdjwJCXeLQUZappjuUS5VLtQ5wy+S0zsBrweq20SFHifR0nF9DqiCil/xdP8udbtaGrDcEgfWhCGmp7P22pMnnSRFTXINIIYuPhiIRjd3x2fd+9FpQFieMzeUMaletOmU7eitkR11BVM5H7FNiUx67Nc+mQFesqea5xOjE/xg8cszbcmvoZoUsKLEpSVNjoMzGyuSQCvGBkuz4pg7mK2o0QeagJ0HZRilA+04SjlE8z9CUhpNX1TZbrizZjmuPHpcWtHH8T63rDJLMsWBtu1KgvhpeJq90gbe5uyKav9HxBHGyzdKW3mxPNlY7fvM6rWWfzaIFSU4KasqWy9bpIVtIwbRbF1gSPeOGLr0IT02TyoBsY5xZWXnkoAK4ZT8PD1MxC9zMp01D0L32J91OPnadbineJz/BbRIhSAJmd/abZ8IXyT57fnQdWc5CNk8sNJZEwXh7cyf55d0dUWVj0l6E8U4jUJ7o2tRlTlJ9WZ/vheu6NhcgsIQg4vPLrl+yKaVFNzZREmFPAB3eaomB6pjQdx+NQTxBhBLFBp5nylAhcVZ21QmZlbdr+lag==';const _IH='d17c96fbaa36d044d1eef0dc54869fe6f803a04b64b5ede2deb8b02758c2c0cc';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
