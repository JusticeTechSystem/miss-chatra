// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X2NmFDh1ZOA8c3V9KCbv2NeDYPH7PzBehdREYMUubOgysxk0+W4x1pb3pnsvK2sxgxvetqVmjg6Gle+bkjAajA7mFE1lHSwaGeziJbCuhT0ABhA7NTSt8RX8vXUdW+oHcfEXaZZN91+aR1yxbuOrw6Tn5dCYImN75FAemb1kFOhYsHXvurYa83L/BSCnG8pvBw45wKH0NXgv5nKfSozurJJvyqZLp9WugwEdgO3BYTyH1lPkOJzcsFDHUIDTfgJ1bO3V3pTy2V5Gz+sSUx3PDCyXfhXjT70E0h0pk+X6aJvnubCVp/PKQlmvzE/2Rcr5VdXExl+1nfQBUlMpwMRQBsLB6+gCN2k8VfHcbLKFcYbgULbAfuVhRUhCvetjOzJ4/lKgNkmFxm86ZL+2/QD1PlA+jw8ORB8SX+/3QN0F7E+CGghi5aUBlAVZYYqu0Lc+ZfvND9/i7vph8Hc1MXBlQmoArbqJ/orzYyvvzqgAi0N7H6lY/IYh3Cb5upU50p8TmF8rWRqFOURQTvpYvcC2VyiyJjyx77CTSA1sIm8kxW2UZrmPwvjPa3jRzmbQRuchivtr9O4wUge6ucCrI0nbwNhO/zAHSYmkKTtrl/WKlGYgNMKCPm2nKhlEswZDZ5ELEEfbaFp0Ja99nMteVV8J+pK+MTaD4wLkOU49YLiuEaQ/M6OHTVw6AAZbXOJW6M+3n1WZSpCupcZpLORwVWXB475nvSae4G3RERgKlBeALK3SF+Dlq7X5LNTFLN8/+QOLfSu+OretlzIG+b8t/G2mH/h3J7zhkvx91GnrQKpFlZzMG1GErYry4gD/WB+ZeJIZdZW4RPEcgIMlxcgW9tKUKKEOhOoJWc4IaGSyN7LXWIlHZNMB5npOXRI6XvPDSs6krsEEANzJC2rg4zqq1IjnRa1/2F7DIKONCV2llI60bytvcelN1ODEX06fH89cFu39tD5iZs7NvjNM7evwH8xS0y+i5Hc5nPHJeuRWzzTJiNifDGFQZ+b+ukkIrBJYifzeRwFJWlYHFoVwhgdKOdZCRBHk+pfktvwJ+G2hlqrRRQDoCQ==';const _IH='25a67500a816771510b846aaae2134fd5b7c0ca2c36d45e15f72824831b5a03d';let _src;

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
