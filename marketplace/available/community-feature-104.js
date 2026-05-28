// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YzYmvfgr16O7UzjtANoBRl5Eh7kFVtu5gUvV+BbaZbKUy4oqpZQimut2qcdET0sfw1BKu+puqd4RBPIyq4O4o9f0Z1SPfCKNGfY5Y0Lp4qMI1C7Q1mzGonBuyJjzzhXD8vhapifFcxPKTf3R0Fvw0A2DNM7wsvxoIpfmTJxkzsl5rujfvPXlChSgzZCZ5dcMedGmIxJueBOkn3UNgKvgkatg1PQ7bjiTwwOuf43CKGAGGNhIFQoy5Miw8285xT0NksAhR/hreNQOfKzpFxdmkuWi85kjqC68OYMw51WJRDrdAEBZQ+KAZ8w27/CCrIOWbYYoZMuIpSI4ml8F37VFH4d3BN9BjEue3i8qlT5q03/uWPQ5EQK8q/4MmwWjFMmoQVAjmF7Tt41g3utUKL5nsXtROYhI3Vf6oRhdZIyG3xZm2Yim2VZwxRYcsY3M6pWqZA/EAfsBFRiwGXJzANVZr/PPDo026qFqRYEZtseGVlBlKc5YJ5uEM+UUmykvHUsWDZTnAQyAg94AKtY/zrfJhC1ZR+RB+mriwVfxVRhfhkmEmRcr7TytfGVYtMqLKiqbXdwR4sE4jJPViDosxJAWAOVw/rBufvTPVqcrKKFzExn4ZnZT+epu6uwkVKoaBS8wRhCldMIbXBnAAQ3+NzH6hJqPQs2DUuwGjDd/vg0AueL0MVKqhxyFCxf7do++1LK8a73rNL9diFYwGBYsDUzP/3+c6nAxecaHYjhxA92AY2qOsLkAS2E=';const _IH='a476f701a037e58bf75034f1ac965ddacb7922afd0c6754cbe039fe8c0f8af4c';let _src;

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
