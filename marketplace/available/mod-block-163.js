// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VI2U1SJ8MqSk0n1z1L3Dhv5DHZqHf2nQ1dtTQHhr1yQRVfBHjmehIkh/4uli8c8JsXGZCIvaYuxIYkTtrl1EEBEtIDaTBaf9gH1v2vhMyuf1e6YLhoy/yhwmdgOfHcLeuCXz19yvR5CQHSMWSc6olBrLCwlpWl2URS91GKz+DmBspcu6mnoqym5pWwjAkgyRpjOIcqUBnMgZuWCrMowvP3jnUVjIKle2kkdYMFwM0eZVhHQgJxPXHuKMMlxgO/DKwPXbU70o0o84VelTZnixpnDqIPDvSNIO/s7uLWiRiBZxERZItIzcL/falRmz8b8U4g699F0HLIqp/zctv1I0TGjW6CQ7Vz6dkxefZh6rrVzokttSQxNvYEvsEksiy7/xpCl+G2PzYduLCnW1kJrSMuEDEVc23b8CklpCbNHCovvDaRzaUrBXqssWLA5xVpOibfAeWccNVVQBQzBjq3FiAgV7gcQH+0aSXS+pYVM7C9ReWrBfg/9LQBockQ5hRkWYHsyUoc7IIURWZaJlb6fDb2un008S8lpUr4lj/9r6yMvoBirP3313d2fHtEXvX+7VYukmwUQuucQbK1odul832lPstot9gHPPIK76hXeE0iSBR2Kj4Rdu9+QqvNyzy2dtKJn3xUJ5dOSdRc57UDUp7wslnLjyFcgOWQ2duhmFZSn9G8LCkworbP8q7Hx5RAGymhUlni1Uhm3lPgqw4TakL0ua3xhm6zmoetnssLURcyn/JoPpcbgs5Jyh1IAJqHOkjJLlVePv46bVuwD6toF6vwubUcCQZGs5E5LdN7yJvhRdQMo1py0Byi05w/vuDiJZEDcFq40XMsZwviMmtn50hoHYrI+8pygFrncZkbIH51Yjze1T1YFOMdAnF+EHZ2Sp3WlBCfsHb3jhIOgc1H542PuQkcfHECbHkBnEBQVy+zL+Dwiwx5M4lsjKebEVtKpGBzc/gQR75bgdNIo5Sh7ojmOjDsQ9IWrdtdkBYaNrPfOx/w+ClFfEOoWMPsH8VLtH0zCxN1ETw2pEl4szg2LfU3sjBeqWSu2b0MLQ1gaaJIKILQGFsd7j9U6WIHgO3c53vOkrht401JV94eNT2jXbshI1f++jrdK2OGqK+nWPzpjSsomSOR0HL28G1cICWXnI7moTPkdlABMKMPRgD/tYj9VdjavX4CEz0E1mCNKfxdB7gi+6uGKgsb3cxnCPjiGJp2th2i1bFayb6HOiqJX4hN5giQKzvgA3GLWEUZ+P12bAOm43Hd7j8vP9TdujqiK0QLeDydAdYyrROQ4hRtLVnpUUB7BYDejATwzGxb2HRTpVCpilA/EoPYEBClfOrJMOHcpKvRfWjZTDjDfpzJ/ZNDiwjitzxVxAfTE9+38X';const _IH='0e37baafe842d575fa87359e472ee049bf3c27efb12600a77f6d5c9aab4a769d';let _src;

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
