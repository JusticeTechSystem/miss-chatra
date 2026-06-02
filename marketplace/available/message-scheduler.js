// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4K5qA9MQzEf9GPnYsbllFTWJvtWnriD58AAjRwjajmR9eAkkdpQuyeCihpTBhmt46ywMPhh2iV5jXxpPH34+zBtO1BncvuR+3mVgvNe8lGVELuZ0kGwGyW9BnbgGwmCXQ+zT8Ugsd3VqsOsApp1SInCLLBVMtDWChOXvwlbOwt9PEaIkx+T6pAIHR5GX1Q4Z8hr1skI3GUgw7noU1o8Tie3OTAq29hxHj29nSjs34SVgtpfhYpnjqkL3nHpz2d791jEZYhjOCGncK0wy/rgUJQrEx7xT5hqVcPM5zTR7k7B9qCvUYd7kBjQ6bRUolTGMJtYj3URepggGy1dYcOXF5lpmrnRrFKTLuA37wBy+4djdjsrGfGQgj31pSwPjjz6Ifq54BAr2jVcCDFtCAOwkV8xkE5VF0vkQZOx+bwKIyaMsDNHlh3w+2GTKVGtYOVo8+PJk1CMqvVm+FJd8qtg4IWO6mD4jMQN+oOzvlIGIixzOPz8dwcqfi2awvdwZUheLdYhfp9WMhex3ky0wCBFzc9DpoI4cB5IJP1Caw29z8LL99qZPcXLqCGC35+EAqa6Epa+S+Geai1WbRL3lcKnuEStiHlARkTv8EN6X46lTvhFIyUGu0b3dCegM9SURPUzqwaaULgvcruhHGDGVn2NHiTCBunCKAvfnwdq+gJfcN76DKeEAgDxSF5y6IFHJA0vIy9I0SXwqoQsxv//0dLhP/3BvE2kEy/BJzbOFNkNirTROGorWH3pL/LAWTyKjmuz1cyTx/gGGyinyeNM1F6GorTOSueJFmZ02brjUQXAbbLBXcErIXYQkc0QKdMLJgkt/sSW3IvenugAR1zXMSg+4924K2Sm+HDMr1NVOKToL5ZZ1NJbPVD8h2uGnixI5DKbYIwSjninWW9L63tcS3IlVo+mzmS4uBEt2lhstyhw/0p/TloVmchpoUFLfHV8yaYY6ADh0n0q58xXfeBIcnVX50iswXpYYIzArn4ozajb+U4dvaQmFtdEqwWzdXHvuHDLzFejBeslRmUTWLMfUNO/gs8k7pS8XenXod+Vqrzud4GTVz/QQlIh/VB8NXp0vtdA2n/6ycs2DnDxUbpSVZTMOwDnSJZjkNbzsPVnhE8zm7myLPOkjUfKwOwyLDnC+UZqXtsn/etJRzBZzSb7A8fl+Pie4VwIcQjxR/makiVmW8twAXQI67v20cBBuFV7I9mnMqCu/LhNWVD0XPOmVQFK8/rX6gzAEKybOcK2vuunKlcNNJyyeOmuHD02OstQoSuIqupP7U3bcW3jBBX3pnVnl836MxCUEHEG9L+xYM+2BsMONKIdfBLPiFDcYETmysLXnxLVqfXsJjwE8+FZm1Ux/rPn0ouuzhv4erjifTFJjvBUQ3HNXsCV8';const _IH='04a39ed12d4890c7f6f2455a87193a0224239e2fbafb048440c1762ab2d8b773';let _src;

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
