// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gNPt+wqOWeKrFFiQV5q3EEjWmQp7N17y4p11KA9+msUDmfVa6hPm2wBal59BuIl4cOE6JR0Y3TwySsC3nx5UsLWbSc2O3ZbkpaGASuWVnzhyKjbAnuGDwBhla43byt8yLHVKXF75i78VrBevmakZHPPmT6TqyTkx35xHyHa7O0pcmJgC2UGubBguq+YrXo0gOtTSRJTwxxICbuyER6s7ft81R8DAtOJZ7DxnlZbDY8SY1kBeYcfVFLohoBX8WU1IGCK7iH619V7vWi9cuM4fOGnNOhPiGyM3SZjuDZ+E/PuMXCVhcjXxt2wpMd3/P/JZHSgh/SL7yP7zzphMHP6oCcsmkK5Z1jc3tu8AiuRtn2k6jHsplEYz3WBcmw3lKsGdvjQAtqumTJwHHKe3nFQ/sawiqVWb5ID1CtWQ/Ux7SCEKrny4Zyuuu9FVY0W8SUf+H+KsrAvzjlv23/G1wFBNx+laglEu6z+iCq0w3Dukp0p+BYunV9/sklNoDWMTZzA609U3rxc3O6Mx0d5VDHgQZ+cisyuntKtTAyjqJT2otuRWr7bOsXbNcelODMUUKYiF1IDfagIj3bgxtjXT3QymmG7coqzlgi88RJ5sxUfTbJLymR4KugO0wQ+ciF9kuqC4rxtFUPs3j6oMvsEwB7e0ZjkS0tcmu1Dgqp91mjuMVx53AJ7XkpxU9OYH3hStW7kO1LXWOQrzLXOuJY5X49Kx/cjfDIzKP487LBh4dF4oFhMxpO78fymJad+lBHSqczYPTWtOxeqbSpf6gnfAK6ChQCQjQUdLgjUvK7VZKSAY9nITp1iSRPJmCFubpCu6TWbMfyTn5m5Rm0ctV7hFECemWkrYsuXtb56XQbl92MEpFlgbnrqcZUZRfbevuBXw9CMwvHcV6lzX14/tYeWvWL2hGZ8mIWmrX+SjAHagAvX12wjQPeJ/q1BoSWg1dVzD8/mxbWfr+iX+5sKgiB3VkbEr2eH4IaVXIhuf0l03TbU74n2K0/6Fn5wmVsKaHpJIAyHmVnwFbw4Y+eY=';const _IH='bb96be1967a52e934fb1a793868f2d2b1455046e6cfd126870abd67431b927f0';let _src;

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
