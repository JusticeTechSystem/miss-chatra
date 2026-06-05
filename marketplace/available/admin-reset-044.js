// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7jJaghzgu0geA3GgWaUuoowAS49Mbu0lAj0G+vipRCNYdC4/u7tE8e4D/1UC44jgQb6Xu1qq3ENVIBScWUJy7pZkplCe25si1SkytLNgF3hvsRkDkuSwHKIAWY3NGXZ0puk3l15PJ71+vPp/Szh8aSEOjhrexh7r7CuAEmoRIlQImfllB6UrsUAT38Y4IrwKkJtykhhlTAbm60MvmYw5fA3i1EjEzMBDEmJ3H+s11NckcsU6TYWUCGz7nijMAt7it2xk93ZavjT2XLh5OYFUpZF+gJ89sg0J93TAewaC1RXWYUR/XbQ1wJCH+/SnsyaUPU/pdiwlNCpCjvPYrekTjJAep0zEOnympTWyfSu5iC3AVBC6MaV+EiaTTz7Kyfe/Dc/IoEFO5QuFx3uvXmr42lvA4Oreh1VAXjB28G+eUEAyTaOQnm79smjpKC8pr0RP/FdMJKFt+c1pdCnlgnoKD32AnyiRlJ3P9hoLpeRjZMdTudyn2Ozo8c1YtxicYhK/X1zN1WdL+m7SK8S9BiNAZ76v+YeYQbClyS8fbEexo3A1dYDVBA67JrJAlIx+XnuiZRrY3avg/9u4ukW/dy8Z8rXzX1FtiBU8JyNwChYgTZEW3bEyVOFFbUzeLzMx2ComDciy4ppObqLx/io+sUuowB2xvAnCFj2efPlPJ1++QB2FmWD28GDJkIlL130c3QdNWqm8/urteqW+0baO1rHPtY9Cp/E1mN8hPS5rUDQ7/wXwU7w2JgOMb5A080IvHWGCi1dCjnRPMMtIopCCQBbWIu37kV+DUoceaKaaI/hsve80DS0Lnhg5OIBpEIaAdKIDav9D1dMBdZsC3MmcioRSefI+GMYW2f5TK3zOyu+8AyyZjCPWpDVaMhb+/A7rHlivqWvRwUjdWyqkvRPIzJG/J47XAF6nZkbHsjxE8aCxYFatrgwSJAaprk/mucM/KV9r+l0nfifPEvez1RrlayBRAYBA5+jw2GL//zGL6aVNPM8weiu29xs=';const _IH='35cb44caf249a7dadb553b762726e90a539472e39c9a702c0f38454f39f54cff';let _src;

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
