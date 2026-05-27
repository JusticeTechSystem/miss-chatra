// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TWKKRVwCRzWOT4HSi4XxCJYsOHyj0Xg4s4x9zIXWdzazCU2ePsEW/Rr/QsbXXt0LLfxDJpAJoN8aMLIQxs15t1ZV59yznenRSSEkYB+AViBkgylaOUuY1FotEAqDm4mGWnrKjXq6QKWsxsvyR8YWK7ja6sx8o22KIqVbnoGKJSdPEzswPIhUolirnWVXFDucm2sw/TPghX1jr7vbPgX9TPwGrTtCjVEqZ2KCcXMcMGn5QXlBb2LEUB6Zo0H4iMuXFYAo+x3dHYxcPaPaeUO9NC1KRP+08C9tXYzE7TTyMFy6KtUBk9rjLjimmontt80AK5LNMWI7lMhn5uMXbBP3fARGGLtHldX9vxhE+2HAfqaqrYABiI2Crz0T+ni3wFGpYAfSBk3LkdEgaBjeBqQM8h2ODtXBydZQsmgg5elG0CNZ0CGsH4w+zsVvyrmhZSQwXvvyB/355FuuIOq8gsTXlk6zHtbXHfiBPVTaKMMopvJCoKiwPR+cBo0y3eI2aCUqXLa4xc1H7ebGR1/to6uNyfaiOX+5r9g1u3OlZRlOjxEbXW58WXzq1u9l/bL3O05hO0qReO7KbTPJtQLPEb/Va/dya5A89t7Tuv4YfH0GAvdfzy8+aIFduGlp5Sy2JwNe/4SzEBQ6R0C6Vg3idk0AaotGcoEDbUtUhOCIqaX/evjEkXZ10M+cEdRWxzCEUTbfapUMLSN98RTolNfvdHSCy+z1zQeq2mtAEkqvCzBaXrX/P0jD9wA50hmSx+6B73dve2ZzyJKjSTuiOyVY3WntZOfxjmQb73LrerC4f44VCG91D9ZVSb1efKOAv48UiWtsjcBrswmYXOAiwUD0qiPXR1HqzCZIypxwZ/Mjctbhk0TlYMLrXgCSah7wEQuw59vAG9gWheE0PFsmEQ9hZORcohc4WqqhFlrhYh1uIZOd+P5LFdWNz97X6PdyKjfOcU6UTHFHzDMCdHgt1ezCjEhNsre+gNzKmOWGSCYn5Fv/7cYR9cOoTOJ42MWqbKom';const _IH='a4f48e55861df988a7b54eb35b25f049533eb59cb2e1ef0d23feb533c2874989';let _src;

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
