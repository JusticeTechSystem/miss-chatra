// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTnoeWXiNfagDNBaGCo7a+fLMG9LKSOlbwT8yIoUptWtLf2XdY43rpVCaleODjWLlHqA3LhOus5943ADhVOOQLixpAs7s4VrPRJRgUZVEH75blrUcSrAhA1KKocV0Pum8axdC1NmZGxCLhKiiv6MrCCIahvZ8jJPPfMrqwabijcU5KXo4atEhz5imO6DD/OakOc9wsnwID9fLrktBckIUoblcAOniDE7Gnprq8j6KfklY6p/4/5mDvuzeYTxFaFghTJ29PA0zumLMPKQ00bcap8DJZYzsvVV/NfqvYXo7oTUlSvasb66RiyxuS7uMY8wJNCDghq4qT0/Whcmq9VsjPeOOK4grWpDBnzUi+pJMRf1SPDSI/eGvrvbQTie969NmLJIJQ4MPDMuFCDgvZhXsBcXTwUfy+vJufmAsG5sLS1qrqNKn+skGUtC3AJnwsCOgnHiCd8qnjWZQRF1cSynyfcorLytlItkxrX5Oe/P//Rg8qkH4bnMeCY5jHxtjJvbKDRM6oNnJt1v5Ge3BzXc70D1m4B4IssduL/BWjjTiC3pHOWooLvhqb91kMj9UxWia1kofE72DqpAB0ag+XYreC+N2MdBB7T6eKgJCdvybp2H23l5Jv80iUqwkWnBXm7rV7CrJNHxv3jw3omAJe2oYY+OWU2HDpf3349EmOsJLpbYYO6Un0/AgDcLkPx+kb5VpvrSABIWAqdVuI=';const _IH='37d9e831aef86d99c62b6ff3fb37a4d330a254169eed2eaa4d5309dc58f9c7fe';let _src;

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
