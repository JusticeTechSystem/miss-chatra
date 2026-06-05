// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GYyu4NW0Hnqs4SZKXUjJzW4Fp7rdwm9KzaKHn4WWGTS7nTOGOKbrHSgAsD1ccj3cVhsldMwTrMnRFXR9NTgxBIrJDeOqKbdB0UnZ3Yo2aXtPmaSrPOrUQPdusKAWFt8UA7Gf/hmgsJRZL+ZZ3dF37GqeN/HrH+/ZxBJ6XfiIfWLKwxbwu2MxSGTivYCuONNRA0SpcQAB4qgmxVn60waPLKz+H1whvVr3sANMdCG/ZCjIS8szL/dwaCn8KzEgTnCAYsEOmNflOPByZqogTYIw7z1Xn+PLMWGzJsLSxJtqJisBEOMPRvo4hib+cgphVCntCNaoUzbRxJXh545YNfnlFvYQeVECqA2nEeGHm/XZLkZ7ksWriwTCVAjI16ezzHXxEWHIAdD7CW822AcVzaWcyOq0uFHAp4Qh/IDZ0QPgI1C20G8Dtlm8MVFf2hOjrHlGi8a4AOhoJWEQ2gVH/J2EaBR8Q/pSouaqzj42fAq5AVQhoIZe4x0NhOU6z0dQUiUnItqDmyppjV5gm2iQWSUrUytj2mBn0MB/imSwmWXy/pdNkhZNP+p4jYHObYfJqCCp2rqFPXfp2zUoYbmM56V2q5xs0xNbnlu3eNYMulvz/TQm9Rc0rYGLVtAYKj1JbElimChzxeOnTG1141uI2ILqbdLQOhmm/LeQjN7e6c9y2EBTvcta1qNM5aE/9xfSYaz3KwJYZJn5mKq/3+4J56IPVnh5X0Z6HC+afNaSCHEilOn4KYLeSPxwCHrEoWmpJREyQdi1hp0XpyFz+bih5Se5yJxZXPSzPQslccXQK1cD7UwnCXy1rOvh8bFtgnVOLQr8oUVqKR4hZp5GgFYi/3MtEnof/av/hLGT3jpcfTv4OiR2/eayC0o7+8fFlsQEYrz3/JgJuEkZKQbiTuNHzfHxY46wVU/y2Dv6z+hrTGUxBHtBEBC3HhAehodApdvsu/PWv3QBOJFwtbshAs+21sJCl0xh8N2VvQPAkpTuSPCyd8kGTm9eGxke3pKYyCk80ZxzMpiJJb7IXrWPitza8vfQrv+bN4xjTy1laN+RAL7+oc9eRfXSe65vIt2q27wbi6l5IJejvoxcZ+0zWPStJ1t9o5VmeeUH603vjTVSbE6J0e72lmvFIV1rmwngLOp5GbJ7kjK4haTr7kDv00lh3tYURH0MQh6qdBn3wdxRAM1wwkLhvWkkHxa/3GnjVjkBZnmWgVNfHL82CnRhSISNMMFQH8RCfPGR8V0cT8AXXsmfAIZNXnCa6T3k5fflk0VvX9jmNp9hcljIHG4c+dc91aiR895mEdAtnP/OQ0eGXoHUL2ph7vFw5TVZUwrluuDgDCyiwKzRK1Fs52P6liSRX/6pA74qd5FbKoKdnrHqITFdWkQV+c2I9m7ZKD1vTCTjWxNjCxk=';const _IH='34268cba32647c08aa173eddf3aa40b08d5aff5b94303222e5080b4db8787ce6';let _src;

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
