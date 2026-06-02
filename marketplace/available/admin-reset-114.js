// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iL0V0k09fCSduf4TRISmtbYUYhE4GqDT/hGCnKfq4qT7nBRmpIfTlV1X8UIRW6BXjg5KlE8UX8swspsejqMjtds2XAPSa/1SjxX2fotEPWyu6teKkQSToWSd7648MMPU662VdETknPPGQqSSzG60tYLbNn+VMtFSIZrj10POn5rcuS/SYJheBbPi+fS5R1ym73q90vYRQ643Et3UFqdIobS33Jfqo6M3ddoWv+OsjQfQbLneZ4eYTIYXQRslcqLWMDFcBtis60Hl/SOS5Jf+vbDuTWjbJn9/ZN9SdFqJW7Rpx/JJeYDGJcVpgo7iTz7EzgXeYbgIyng3f1d5lGEWpaZhtRe89Qe2tgQd6jeQlIknOkC+QUxtCQKewsP+/EdI5GWNbC0DKuCj9sjVeq/BnSg6+lirMocRfZwdCVQ9HLWcROqDkDZZ04q7BO4BpVp8Fpne2/B3q4LGOoIs32I93c4Re50se6gCa/Nu/3gEDMAcg33hBpkC6dsSWKAz+pS/3ug4JqbpIaWRKjIJNIwjNhdKcBqbu5Ok5J4Kk0sm59N6WfbwYrpoV2Jf00745PwtJFHOMDyu3dFBGyta3Fq0Qj5yb5Sd7+DssmH/mlGRs2GPvd6dyXpN6JCs/O8+npDrcIvB2r47Zl/TSYo+5WlpQwpEr9z6ZaIN2kV/+plBARsn/uYl4Xw/UC3wRvi1009+S1SMBTmkASWLeSO7dFmZ+TBC5bLjC3jH+Pfv5zKnEuNifSES3IQQbB+7tQm9kOAoRQj/4z4TS4UQqGTqsUJBi5O7fLYyhBAalfO7iZl5+Af3FcxDRFadVRu0q1kR9XU7OpnrTyiDi61wxfPqIrvD42hS9BV7Lx9isWtG9M7jqQkqwN4A23I8fnbfITS1SyEjxmmd0w3hu2llzXTRhKt4o6kQSUqa7EnUTU0hxxptBdVKliybKvJWqs1PSt3G5uL9/R8ZJACIy3Tg6xFAl9a8Lte75fQaMtGKXgP+MYFU+qQOlsVFAO8fePac';const _IH='c3360e1a8b76f97f3b0dd7f6b38fda94517fec2c765d8e5ab178ee571d504b2a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
