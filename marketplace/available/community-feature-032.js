// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/ulLfEE5jE7v6avCd6uihEm8jXhX7+XJQMLDambPZotkSMV9/TMSDiA7SOXq4h1WKmtUsu8qv3SUTnK9Re6upUUWWk1BmoML/5+Y3FZIyTZTs4wUXbVr0NZ50aT9LLpBub1s5Y0ithKXQEMDptAZ1D7FKNc7GojAlYG1lN4/9SiZi90yuG6q6Mh9WjOm7afYB4or9mT/bg1PXgbb5YO5HTF9/EJ8NsOVba7ljzF4u0O+HBQdM+o9LscD5a0cI1qg2vko5J32cx6qmnFF1ts56qlMeLkIC36Gj+aINmdMBUG/E4tgwYeVkWtmCBqyNWZdxQ9aWnXhcStLUnpzmcIBpn9rWV9aXzyFdpTRQCZqrIKImy5mHVCzLkgyp6YcG0+2stO/3ADv7IZe+N9LvGLs/h5FTWcgcVoNJzt1dlqtl+2giCLiKumnfAvRSBBN27wwVq1OQsxD7GulJPBHQxpfYSE2MEWhD/r1UKBKfJNnx+wqY/RhnxsfIHM2/9j06j1wMtCF3wrqSPdf+EYceVsUXTmxdES9AnbYQTLJKr6EeVx3XZtnPLFko7iNJ3bLXh4dRMZAhI76w/UNuhmVE70wih/1eIkVSDBd8z56E9hiiDTFzBG2VyCsPWnmjR0a/LqSVa9RgNTFkP6JMxAm4cmTk0nkuNodTxpLyW95otF4lKsoEYyDbyR1aazplyffsYUJwpUvPn+gYTfUItxeTRGzF7EM1lns26/jyNSBIVmS7w==';const _IH='dbe9279e9c00f63cc58cb1e00efd6487e385a860b019172ef1d85552e706b6ee';let _src;

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
