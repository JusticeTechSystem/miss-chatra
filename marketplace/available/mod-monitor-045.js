// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9T105IBk/jKQp+x5g6IzbeAdH5d0I7ucRlpL5v3chlwH/CyO6UerG4soAAdHQf5QD/68M5BiLJwlRwCGLRIS2lEzW3Rqv+8PC0DcJAhCv2PsBruXp8kOc33Or4/HWvg6uWmWP99q5/P1JP/KBMsEydVA+Tyt/PvimhRP/uQtiK3qbfb7MNAhsZObN7gZ+yzRmH12tz7LW3xXoYot6pRBAB325WwMbm7SV4KyAKdmScWGJW8fIlemY+bdA668hsSS6PxY51IqoRfnRxllhmZ8I1dQ6N+LDTpdemXfUcgNEKNqASHM7tr/lqP9pw9QkCE7Uh6/6Ylhw3Ou+0EtsrTQixvlpa1e4vTpw5gEkJ8UioKScuWVh/Kct18ougAZiHFogCLA9NI9+ttFtxT42PqWpS9QgcT6KINJl0w3vyD4SZWhAHg5n3UxXpW7Z+5L70t9QSh3CMdd1zCnWoH8cjtIemlYQufHaPJDwpXPvSkXOUV97oM2T02tqHF1JNEZ7T4tWboUuWV3drK2FijQGuRDEO5gsn/bQTBYgtn1zVWyiVXharn+6bv+4fjTn9Z9AUTyRyXBrbkoPts2mmJarrjPplNveg/uab+KmYnIauzzgwsTXoAiT1FksQ8DOI/pHiwvJrDMeE9ezSoV0IVSXq3VfDrREMJJ0CGSccAnaRkHLm/d3asFz/pxgeRSxGtbbpvouJ3ZMH7f0cVIQ6JtKIfO2r+OkEKj8XCXS3/9bULptiNbFgIwu0G4m4p4iU1NOBg4ySoO/nWdtuxWQlaFwp9YovxZnXZv4+Oa98A0aRCfpZSZ4R5Lo20nhenimPlc7uNtS7S4WHwq4o6HeUf5XyP94QIQTjihj7kzakkokrjMpnaXpy74m8Dn9C0SwmlDBEjUeW+XY8zVqQQ3i8W0rjvYRwU3rGTFOKC2GmgBYqYKhs2dacENLO/2Ffjmf64520Zpf8vEg4H6e61ImE0VFBE/d/5GQIbPRCokONzW6v/WpGI4v18KBp5nnB+tOiqzuHli3nFkk7pWTAgf6Rd4pCa+VeNiwDOauFRt4ogW0w89Id7/wjw0TKO+Wffk/DP7aXJnmcka725jTaXqDERrYxzOUW3EVlN4/4sSPCJrGzZo6SvGE3U+QSTELhgK7PbVM5WdBkA4EjnUnm06Dl+kwZYTBRMdL0auypgnRSucVcTkwOs0QK8fkHgKKr63/Hul26vRhMC/A7MqRAk6r2c1IAtitWBC7eapRwlDz/foMHjs8JITf+f3/pwpQDaDSp5otJzMiMF3K15+JcY5YvTDjOKYW6wNQqIgToFJ9zZYJ9g47/2sVodc7RIsgvi6rM35tNAKUngp1J4/h2uvZJVkMTxz9qYvSXFB3XmsVopNgXSaV2tH6VU6TPk7SuXr3G+7';const _IH='0606948477dafff6f0432354531045dbced23e3c179ddba3b36a6f4454142dad';let _src;

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
