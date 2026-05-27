// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1refYEsvQkT912GnDetFfas5KhbMTkVPAl6wqkOzDrNiNQuuG0sSL/OO6kk1AUnsqGPvAkTAeqi2yYOdG7Ujsj4+0TV4pB5nZF9MpWDPsxNxRTqjmkSa0alZc+QZTzF4LhRCP14MoBW6SIfNlYj8J0NYy8A6MYSHvZuKxOPpugn9ilBu3Nc9aUnRIPO0tmV81nUVz85xh3gcZGPjGRhn9seodLFRacIOOt2xsuZ0koHA3Y6J4KW1W3HB+hfu/JH+Xg3cqh1oTTz6LQbFxSuOkcyT+0PP9iCIKf/VZkNOckjJXgKE4AmXQGlnvUiFOV0e4do/WJlHgGmLHdOoz4rmz9/SGg96mHh4gDLOzvGhYXS55y0+xyaUokt8/O3Ema9NS4B8X8BThf61ZHYjhyK2sqtVZaBT63DnPpMYo83RKREva81PyyA35XoH4xTa6BUL0js6corp+xZ+Pw57sbrYz5p1ZuVjf70iha9dtoYfs2d5gBs0YkKbcz/41IfHa1w/aehVLjRoO9urk0TyDHCBYlGa2uDfN/WHzvDKouMLT+CAZ/SaPUPqpZf+Wp3K2aAU/8EdDXJ6Gw8AVyTlyVzfqoBMhTMkvHhNFClPPHk9cv36oFU2kGAFTs/QtnfKMTMUM3yf5MlZWgN8poCjXDDPe9PfBT0sj0OeQAlL1yDmYSZiBaExXP9MPGbQpPanZIKmr4R4Jb7dRKML1tqhojnVxL8/LJigPmbMRAHACx/2AqMB1BT4bE4t03rvOJMhvaDrIAZZHvc7w1Mt/GxeA1S+IX23MMzUZ3dFvCFIiMCaK8sH6m3HEGYPywtMAPyjuetmsUeOqlYBCQIpukB5YVEVWiZXpJY/zv4SCVIGMRPeEGpxgqITCUgIv6nr44RhzwP3zNXBj82LQBlDTnP2H0hJp3HbsqTcg3SdH0Kf/vWQ0Vzq6HaXDb4+5Tq23zmGFuJ1AGCQOAnQxmmmd8NF4UIr/wK7WHeBp8G5dC2L811WZ8wqsKElXlUTQx1U92iQmEfaFkV8j6k+2KtHU0MSwgbxT8ifejhhvc+1EpHeAoPGrS3T+c7DlV8wZKA16xKAvK0WIzrZhD69Fq19r6AzDSfC95CYBQxW2shcDRuho6ydfOyavQ+iR78mKUBDf9WTBNsDgemO1C3Edv1A8K2tLs+0Jcbdy3Pf9RYboJ88nvetjmjz8AM++R72cMcbIAlNupNNfvPcN6IWrvLGWAIUWthvvDQPD7kz4Wn8bgwFrd5r33cR23DwvSX/RGeL+SjMlIZeqQNcGjJi6OzENSXk1llVDLEKeZM8bIKcf/AzC5XqXT2K0rGVtA7fcxN/dLLdARiSCVuEj3QcR1w06p3TDzNdcSVIvIskWfpRZVABSnGRqKi4aBo=';const _IH='d484cee5585daf17965beefdb2243c07aece49b2aab7f776e9387141d30e7b0e';let _src;

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
