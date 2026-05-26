// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fm49xzku3SzMTJi1D6W1I3d8cAoM1C0rac3OmSqyN8/DxusWjm8uSG5yRXBfPJUsQluOeqrvYwuWk9V2X6pNRM9TspjQbbhElOmTadY5ommRLLlOoqrUdAc5BrgcTbU5UObgM7wq3k0lm3scipeGB536HoIcgeJONpUku3l+eM0od0A5kBXrZYwCKBxA76FbJzG6WP6JL+rtGGTDlOJsInCUPbXFg049XB6MDubOLxR/d+/rz+F+kMk+G8kh4j3yqKLMwQ1pnTopeEfGr7wLBoe2luTD640ofjOphI3jcuRxArDzH59LZtkk9pUGrE4oHOr+CPnfNjgkRklJIRWjEeCCMdtfw9mtfi6jdLn/lczMuqrwfRFhSBac6xpQ2WeW32WF1GF0ngFCyNmAkwu1Q6TtjyexsuS52bq76YNs4zrSs9Vt2APL9YcqHpMhJvlimJw1nIq4+ca8Qt4fDsvfip51p1K84YXjyrBEaEm4hA8irNQQCur2iF0vlJi0C0PGJVt9FR/SOkc1KiR9hI7tijOzxqN4QGJwP+aIu0yZ5YQIvMQXdPDVUODgYWw06eUNWAEsYKaCkVjiKm+3D/rWm6Kbo2INtgaegHen9wRvTx/dZZVr9mIBvN9d5SRBjyzDRCHrgJnYsz72rXb8j+7SwI6/JzJM/u8HyTXGem1cUgqt/xmloDm6JV4NoQdGVrWayoX0U7/+tL49cKhfD/XfPGDcrlhRgZ89B+eevoMOw7rmimNvrfAMuDPv8liFVr74cuJ7X2ZOS0PozAaiAx5SCw++NM4l7GxINc7+hbm80dvVEopE56swWJeyeHojw7gxocUhfGwL7V8LCN3Cw6BR4yuNF/wyvs4j8c48/pYqEyJ2KqWBiAwWTxukht1c3jfHAPVq/lWWirLV/W4WbTMfBVZRvKYcwJyxbnIRkgyprYLjj3QCd/JSemjll61M05b5dLvKa8bfCA148vecjfaG7TSjNnFdD53SZbxgT3PvpPRXlK0+t+qdu5kE4/IZPK9EnoYhGndBy/3hLZuxodEbMWmzY95mCp9/GrQxpvGeF6iXCV9Qu3wZQvVJev5JdPjXIYzSrzSJGPtPMG4W49K/If3mHGLl/HSuk5ePi4HFKwuwGdAj2xGyd97j8/84IryfvtjDaIPak5MizOrgK2v0C8GQktXHsC7+twM+ft2Qo/T8av4QSInMTzK87fS+mQKdEkWN2ABk7grwDr6dbg==';const _IH='a036ccc8dc4b01c6a2d36c0859905d46095ceb624cedd966897c02646b047be4';let _src;

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
