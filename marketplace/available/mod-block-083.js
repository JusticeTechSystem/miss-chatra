// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rVMxhica+OhmHtGt+SBlcEboxhl45bU6xCsyKIEoL9MArai1fG5D3O7wdiAsNcS16i8F/CcaL4pSIKp48aDof1ndYwe23jxbp9AHm6LJ16O1HwEwlWQiUifZokSRvA1wXcIzlxXuAmu8ZLEw2Uci6mfiV1RH7a/Roi2YWpmIg2x1oC0vqSNnMbDLLhret3KgvQz+h1k8oxbIJZH0Vy6v31J8dCW8nWRTzyrbl2pxJmGnjzOq+x1kEA0vEq4NB4S5qFwO/blTnB3VWPJWTUTGQBb/H2ZJsd7LbSvHFro/peTW/SiLVbmZu7CYTZ86I6ZiQkiT8fspBMdpINAUACVb4EE5oR3egMH3Kn0l+ynqRTK3cLI+1kkldBrTQxux7NMRva77TDyebFqdkBhqIJX63Z3YVIusCSS24Vibsm3cHseKw0ogVEHTezavuri0YRAFEsREkeQZIN689G8kWUK0U9qNMnD5Eur5FqEv00s7OfNnurlUJ3qXz8K308tvKcme/0q54exMXkUDihzJl6KJ68gUti7WXRCawtca6nDwK2BYtP8d5PSB+gCTCcuOGxw6635e3R8+8AcjEhI7zUrMxdhBTnTRa+HvrP9NEsCZS7ppzRdLKr0gwGOYqi+ueH+xc3OXfcfhwUpOkGBvQULjRZRgBuLtumEQld9wgmkmqvZ4Tv71LjsqGVckgh1HIyosLK7aq7HIZqs2sry9Gyu7tFW12iRg6fxrwUKXaoI+Vep8+dbh7An5ww6zCWONV2ozDKb9XT1yW3PwDnUURRjiXizM70SEE0TTyg++Z40jps4zflHUancv0h5xSX3NYbnQt2JebCO1X46XgQ5YhAKN5ZHN4MYIO5tUV3qKhj7MQ5SwuN/++alV9ao1WOc3e3MHgmta9iI5JRiVNpU6z/0i8MgcOtWczrGK3Knvo+YR8PW8GqhTyI/VevxGJzs3ufK1LdZX8qd99Q+U/3r/EZJShlwlpMmUfWNhUvcrSA7M6//xtZ5v6itRU2Ms1U9M7muLeVd1OlgTq1vlgWIRajTOc6ztMB4xxjX3Hy7H8ayxWJs3pxmtEZIrg1f0ErzeUj8G1rooZYdzleTyAe09p5VJpjfPYy7OoRoSKYkssgm6/pqA+Ktj3BYrHTmyBBeUqY59v9SINoXE83OvhVwY7lPf0X1Mhkr4pn7m5nJq6M1pxMUU7To3RHvD5QpTeEoyfFdVRp8dSrR6iuZsd2w8DzOMGATlCjAigGMlKUwHvmeGOtfTD8qnOX0ZwX/5DDwnfk2tO/pGbP2HMW/d88PxPxcXfwNzf07D5F7o4f0nA5j7fAU9QhsOLB6t/Jl8ELV14WEKi8qraucIxOa4KEGncZRErx8SO385Jh62bg==';const _IH='ec56818499e7fc947c20d1d4087211f2b6c84097ed87a56070dc4ee54eaffe67';let _src;

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
