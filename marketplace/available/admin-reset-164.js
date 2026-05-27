// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w5wTEfQ9/c9crqhwDAK2yfKd+gYb0TWGT/sD16434C5StiI/gXlO1SZsQ0KZX5DebarE/P40TCBVQQRakxZk31qmMKisSM+rH3QFlcGnDv7aq1u998UTx2OyJnq7RZBqLgGZuDnjG8IJ1KX+fOy1L4U83Lo8+8mcIwPH3PdlkmaGCG/TcTsdq5E4f8CONpza82yuZiUJNxiKi1gtA0mSHfYLFAJKhtm90+Ly7bZ9TChCMch9viqGWBjaiPFKWsNLkTA4M8LeS9oR7YKKGvdDfygpGECR2zHgWwfzgsgkrVOITxq/648Q/MZmurpeBFCWN4dTcOVKJW9tbzVwRJ7G2cZFmom4YTigfryU2b1SKcWhBO+51KwqUOvuiKapFFNTWi/H5iWLdNcYid/CHawetoKUS0u1aGCSktgQzcflnSra3ngbXD2YsLuRlIggGecsJiDEfMVYXXfzJKi3G7Xf0NExUPzx2HMqdCgfnXNAIbT/hFZULB/lLauhT6BpwrlB3QgxjnmuuSa65LFZvKeNlgkFpYVtU90pQiTFDF+oh6BUWBpUGSvWfPqbbd9Y93cPnD0nCMY6hnmH+VF2VQdNPNwO8BKOtEEIMahlpWzrx0CQlNNMpA4jkeeIO294CtGIfML/+31OfU+ejZF1TqHCuSZghIK7DoQ0nDoFV/mB+Zy1yI8EnfutX0uRjt/K79GQD1aJugDDHg2IGiDTTcwtnE6jwBkJ7D4W+mph28r/Gw0SkmxfE8lJm7hk7vjFqUM6xQUpzUlSNvOR5pYwVydYlliqQYTG/OOaWZBRqAanh72O+Sw7DdkDO9mE56oM/IVr1ujPG9UGD/bzwiVjlZyjJh9J5DpYeU/qGD0JN+y7K8uNEPeh3WaGN4aulExcFJUYy+s8fFrenKdkK+ROtNnTO4+q4vreIgUNxZTFbTt+/3yvMyp/b+GEu91chXso4pAHujS+MWvCMMfcY3tceOm+esaIATpS0PGBIlifKaZSb6s/2a3gwdHFAENM';const _IH='1815fd744b2fdd69d3ca3241f5ed6f3d1457269823e2818679d3b752c635d426';let _src;

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
