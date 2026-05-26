// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ewcDrX3ScKYt0n6LBsRNvL2UcxwWLaKgYqtRkwgP0N8Q/aXk/9ex+xtf5/L6UjTlLqcECJyIJxO++ZThAiEw5KSKHPjqf3NQcIBr9+7oZwihYmYB2DtXdQ1nFqHxGhhcaln/8p8PYikjbanLZnUhHyo49fadbINt5+T8RVWcIAZufAlNdEZM+v8Az/S+5/3M+Y401F43rm2qbSsXcTmxj9s/VGaXNZy6URLODhbMRzT3eQphrESIQdX+cvAntIAGFAyVutuFIoOzfrCX7rvC/1QeECdvF4l+sBtrDSR7LJ6hziPMnYmg+goJXurSRhI5/CcjFoYShostVIIgg9c/Iz7L8Nl79bNCU3lcQOA3j1X08XQKq0vLOJLjut4qgT3MHzFoX/FdHIj/1PA3QlpULSXW/r6f7sukIydLxHYP3UD+nZmwWxDhIbcmnNHGschuFekV8Fjs+G1BmZwwQz1H0uwH1XDOhquHEnO16LcAnrHWYBIqX98Z+jgBCEuvguEFDuo/fSzRt0rOgEpkmBOsu8fcGWPz/jJmdPu/R+EBmUaAQtEF6yM5LNeE8tQzad1S8xaXaiyjvvZ+DiXzObimquq0qJOwxeD958y/lJ2fsg9WXvl/luSlFiV7jN3ujO8f+g7Hhlv4gxZLiaryy3O80gU4Z3e61aZ6AYYXD7IC0i5FB4z6rIe6TWOVt3tZHJoEbt6WH3vQucKhm237KOVbOXJ7/zWzwwxVwerhEp4zwZUj4b2p9PwxJ5Y1MhdHaCJqy03nvNK6X9wJk/szkiLq+QB9CP80dp06j8rwmq5/LNII+DcPt71AwygqER9zdHTSPtbw3gFLGyZq4veMY2LIH3TeLgu7T9BoCCKp/Dzgr+uSrz9JKzJ5Ttb2UDBAcM030hjpECJLgRwX0yst4PX/yKG6u6Rr67IE6wrqQvvtI02Rcd+EP/OYLTsLlGE9/cnssChXLxnLXfEMVbs+IZ/AMalsk7PhPdRprTgkZFR+CcmDzSESBDNhjNm+C6KwRHd3vNXQLjAec8hKxUrVm1dwh16mtOz4opgEKdTEdJftH7Pk2tvbqZ/mLPf1euosgoaExhIjBUfH2Alv++G8pS2T+40b+WpOYhTYm+Jr3kh0PbOVCmLEnaUmktHenermw7aHODU0Wwx3HzwSNrghY/hge02GjNqKoCwZJluI6O9iqVb6pwLRenZM/rNN8hxghFDSva8UvMVe148=';const _IH='41b51eafb56812cfd8cc30fb59f40c840e0762eeacf1ff302da746a112e757bd';let _src;

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
