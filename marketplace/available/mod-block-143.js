// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6HlhrZ5ferhaDRHFKDJuw1Af6sy8lMqaO9vcBd6CQPRi4puNgyD5CeoL/05uilJdDowypWvtOWJRLx1gAWvZ3sHPGqYkv4QOVI6kmPEupkHh26YEYudZD/4lXkr4qmLb3kEoqkfHD+spNFi3eagLDPgP/DaykaaSZU0DHhESJFia9hwWoWpKXaGhuKP7R056LaWaFRpa159yBOFdk7R3NHlYS8UptaxKGoCbCN61/lCcwKCAyH20c/oEdiewCGeu0RhbBf2lkeqEVxtO025tZ5dDPu0AZtZFeahmnJiB62uPF0rC3i7IEIukuhifKEokk4xtxtEQ0RJBhaCNGJJTsTN1Pi7zhk2hm1Rfmkg4X9V44FrCvi7fkx99aNFWNJqf02q25OpTY8EdQvtivZ8JhQ5twMxFG4fvK4TQbULFWELeqV+in9Vh0ALOnXam2crvmLjYzbFgfskj0Q7uPp1ElN3OZC1O9CBOSNTNvmkkx07nD7PmFVX6uCwRjdffpCLXb5QnbViXzPzs6BfeCe7H22jnqgMrcch7+wrLpwUlMyVph9PaAtboKr7KrcVxtHEFug60nr0nVE6ENC9N5gMdmmMOIbQBcfuFOqTcwf6oeyJtspiSoux5s5hVs+2J1EaY1HSzlupGCSXpEGfeF3IxH3nwK32pU2EPqv8ZpGDieDBcxaQM0PfSZwY93y1VyVWCFBT6pRvAkVsM/2E8rQJ2sXjNuunLuzjB0kxN8WzE21VV3V9gYZQEvkR0E2ENWXH6YpJtuPCIxTvpRREbwKf0b/mDXdAAcQZpluLK0NZ2EuFzLTsISbsTf1uAkYhf51WksuigfWi2k+3y3x7wAtP2PzJbCT99W478Gs1qhkpocGSxd2GYP1j0xGVi06uIJtc6w/Gp8BMKkFECy05HR3SVZUemKnCkRR7SxsMJOoGNOIv+lyu4sfkQbZ9l6UAUBAGKYvzl31+W6AAjmiBqbxS0bfwdrDPhT3G6Fso4MnZTl7IctXPC6GQYHdJ4Cc2PD/9TRrehsVACjAb76lB9VQMsLf+1QODyn81N4RKK5KvCOqtcfgMrhf2StNRUgmquv86Ms6NjiSB81zYQm5HkLX7yocWlMK1xFSNIVPdwLRHn226LtQd3/LwZQtYjT3aQDsQ2oCXst68z7JOWnx4LN8TIvSuGnos4zaT+xN1sJUXPaZwnENXsILYvuj212H6GqA+7a9tyHAay6Ub+f2Z0XjCbr67eJCp+TqOS6eIvpB724FwBv5Q7GjZliuCDR6EPxI54AU3ePHCLHCgxKPUfIGxufQgSHlxiNpibo8iuycijXvDT1/k8vhSVeJRlpNfxRiv8Cun7dDOcxxpwo0k5Jgywrm2UueAo20d4fH/Q=';const _IH='160c6279a168c70e6011588290dc0dd41bbfaa2cef3e9a9e8cec3e55116bf1ba';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
