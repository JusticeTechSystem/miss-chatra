// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ckArTBsexVf+JIcQUepSBzMBoV95xZUOFH2/B2CPQmqUCn6p7PuQwHExCVFPzaKnb0glgWM0+KbLTyG4r1dsmLvH+Z8l1lsFjC6ojMUM/Flval7Vmezb5nt7bJUD5KQvb2OC7GXIgDn2dDMGsVcUgiDqgEjNDPoToSX8rXWUxCq5lYzrf73LDNGv0ZqQ6bsf1S3dYxohqDcfALqA5OL0QA2JQ4e1blthFqMnu2yJM0ByrNZmpYUm7gsmpLpGirYEQ4bJakb005asENKNv7BLUXcFCTvMklA/4hc7gGKSzHZw7w7ewMF4rWdZlik0fbxTuEaobZAEvyQOQVB2x3Aw0qrZ0Hq6qc7e9N/oWOQrdKsT6g/+mvfTU2UuaigXi9Fp2PFMSq5ZtehPAFa4ln83Pj6xjZbq4hFyDDzlGfcIKoQVQNiu7SXqvKDkHVOEilsby9VgZKV44auvxwvD+XAwfsXVh/BfH0gSK6SByNplTZImH6uoCF6VTaF7Qzqtv0xisFFyjgPD6rYnxORqVXdZ3VL6gJDBhCR0Ofw4VxrPPhsvK/E5VG/g8V7qvN2zUqQkKmNH/hjzw5s60lcWcv76eL56ZOsE1qRV/qf8gnANaJ8gZmwhckKpUf+VyhgfsvnXxrfTPg75oXtdssUxtB0ozaJ3XGSqqNYs9s56Gsq3wN46lCS54yrAT3rnUaUDq3D1C1SuO1GwMQ2dJrVW9mjU9CmP3IPjRWVg8IRKvmpWg8So7QN37lm0pTEKNy7M0bmxHnkmg4Q3WTeB7DMuz9McwyQLZWBrmAPvT0x9EzXDeQkmeNzkeJ309FZfpAoo28GUwK51ygUCBgU3H8uBnXYQzYTnITzmyntYXaCGqgHuawA3MmN0oUTwDg26zkXGAty2VBuxcyrAixmT6xLx0UKj8edFrbq8z9VRPZumoHmPf7rN/eHMn0S/oU5zHJthZLeoblR8Ni/cdQ8GQp/HeSMPeglQnGlMlW/M5HSOhSVP4EzWYOzIGzbaiGIxO49rl4ZFhFs6rsvBH7Nkvz+IMmlQQZNRF6BVNDaISdbI/7Lmt4C8FivVVl3y7Wxtd7Lu7Pd24UZR7e/RkVlup1gLXxig5dDS+d37gyT9/Fq9By1quJxyX3aY/rqwxjFrQAxGG7FZ0oK92js2EXPDl+VHo/dm51Y03Out1aj2DUkCzpfAxN/40xZGNPUAS2YylrSoKD+CL8tdqZaY2HpTCl6gyouykcLWE3WuqWzxiBHzZfCfhGz03gXxxAD0lPzqPB/cphlBLO/biW420sWCIDR5Sp/goQrinVQ29Va/M9emuGsmOyxdyHhXjaUt+2+6miCZaqyxWcfKm9BgpePJVznAL7QaRL7kZBMzkNNCSqtzTDz8ezu2vnrQOSTDwQ476WBiGQCTARDoCgFLMN1rc3sqOit5N6JFk0+P2xhZvZFQmhlTNoQ1B2yv8VcXPV0utih2YKWj/bm15N2IYKNKPyK4D/Z7T2C6CUhOOwmLncbpizhxGKGrzNSTTnWpyfNQxBqjQveekA3dXtcpCOc3W3BDzJi/ouDGeheIuGEw6t1JEIrG/jpZ0nd1yn9xxTnT63Ui8Rieo4L4i0lau50keEK8OhLwvOcjeoXwvapC8QN9zdlDFo3eDu4+LtlURAe+MhEnZlElrQ9/yfRt1o5RyKWjvhY3nQbE9+Ocgc3p7JvOJ82pylkpV6k+tpvBYieSx2EUldor5iHYLaqdPF5eDD9QJiOHAKWxSMkTi2VX26hOl779/C6HiKVYbt/itQ==';const _IH='0314a00af8439f265d6de8195180add301bcaaae0fc2983b0a9310e88a28478e';let _src;

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
