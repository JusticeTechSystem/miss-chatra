// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQK6NRbq+D/pEapYgf9RF9WoMgbnwwP9EE+nDxtL1gTdMZwJ0LFO4m48wB7QyV5+uC5oe50qJUK9LvG1vOLV1F/ZdN9llTwHafffJAI90ZO5/WlTBMOhnNV7INGtPPt8+6zhrBMCmqQq6i0meQDRbrW+7gXv9CriF1aEmWPtdCGebEl45vxZRUA1/vihyNHsJcTPlwL2Bi4lnJxN0pF/YfJEjGv0h8qaQDwU3T81WO6yfEAgeoWS8kaEocF7qApE94NJwZO/LjYEAa2+Jqx9OKJ7qJpKDlKnmkiIp5AWyBjM8x4gc2SYJPyA5U7QvjRlfyuv/qw+qwv6IEgz5oXUNYcasnWyAo9lbyXA5fmezLNcDICtG/oJ2Y4jjiMn403GC+vN/CWtngtoLj/TzcOdPb9MUHSwMw8g7ppJR+uvdgU8BHGJhAImUWydVoH7MIUoOTI1QSw59qFKsGL5A7Ew9X8I3Wl1j0nZe8g7czeqgxup3U3+dkqHYlSL7z2IEBRCRFZYkahduibclSUpo9EQaNVI1QEz/iSoHwHcmFDzL46IFD45Vc9kOlKQCCo9HLSYwyLeO6hr80ktniVHrTVOjR5sr8F7WEhoCZHNID7G7Svm4yehcH1fJcfKQ0fSnW8gPH6OV9vC90bf5xYgWmXwnH9UaTa9s7m7leJpz/9d3lp9SKDMUs/EUqRZgFcadItvgW14UbFnQURAl/HsXIk8xfbRbRrhogtlltyIOuDRQplHlwILXPSKpghLWTJQaJQiXp+9jOKGaSu+e0hFr/SerIYWJ0k5Upn97xobc6MvbbDije0/qII9hD75/lBuZdYngASTpw1tg6E6Yz4FGM7KnvinPWuiz5lqjJRORT8yogFZz+q2HBoTEEYOt8AAoQaxh6UkYacWHUZmcDIkhHicW29NUsW1cGd2mkt87mhwz1/pZuEJMtynMKg+0Ns59ln9ybA1e7tzSWq+SG7MnNVenw9S8/9WlIWo1YF2Jo2Et3YaSZt8M/j4pC3bb8W09XdmoIVZ7Dt16IxfBoDuDEk19+fzh5Nds2unWOKtnaOQfkJsDmFpLVIC/f2YzNVUFpxkTOnH9djEObUExSyZc646NAlzEibsJr8cA7jJjfQlneEuTjOqLMoyZ+uDeWUQDuL/glsLVhQGJBp5xmnKfLJaJxF+I7qqGuRzTIg0Ypo7ao/XH2nxMLhTM//X7DTuyy12lEpnWl5RK7cXKVevXnpkFlMCrc=';const _IH='327241a571ae70cbb15d9b755cc8fcde910408203440e365eaeaf399a91cb5f1';let _src;

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
