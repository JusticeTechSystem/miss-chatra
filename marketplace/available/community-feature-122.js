// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E64YUS+kvU6ZxZ9r1zr8r7rPvWk5LNk02b53ymwunqBfXmTwYOmUI5ew/+nggbLtHVpTnFRAJhluJDo6K7TuLwDURnMKpO+yWzPGdGmmrTdE2hy3KYwdiP037wZ703AtL85gbLU8Ja9gYsNsOwn4maJvkol6djCVXT9behK1IG1hQTxemOW7IouHZkFL3q/tK0D13QEbzy7GrXGJuyZRB4qHr+Oe5Raa99qJLt1QGzSwjZO1T9gamlDOjyEbuHsbHV9C5QabINsrONah612VOHzRVTXIhJSnU61OlIp64zeE/22KnSgAlmF9U7KVzT8stvZM4XHmdIDmAX2zYSAKVH1Gmz1yMseXtFiO+OldmxxGq2a1Du6b3z8nofNiqxeOBBiLAVLUkhlEF5LsQHH2bGJHz9Q8X7yNq3HeoOrgHLsYVdtkmMp7eVXEQ54Vu9KzGzyTTXMHJKrBm8Rt/RT/CL9QZaeWsJSfCU6VZn/j6uby9uUk7eah1zYZIKnIYvtXSZleQg482oc5nsKznbp+L+WjEDW9WXnubAUxQJ6qTbPKOroGyQ2exNYI0J4c2GyYZIkDVSrfp9/Wk1N4lJa+EV4n8q2FOKGtMy1TUYgxAn/vxK9oHhOt+eqObhKQwDYgq20xQ03EbJeBJhOmlpu/roYNe+nCirlab92jD5UW7n5DYKP1PUMhlLLm21sBTgNJALrqilj7lk40+JqRVYWsaIbE599LFb0CW2Prj+tmW/gwKXw=';const _IH='ad47e7acee189406e908488eb70a204d61582812e08dcfdaaa24affbb2edfe50';let _src;

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
