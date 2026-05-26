// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UvsYXTUenk3q3I703DS+Vxv2loHBT2kCSZlCc0iXkL5cjsQyKuy9Y+1/0c7B9fq5QU6ymla+1W0nUUfcshjDQrxvK6G+6kP/Wa7eXENl6Eg3ui+TTAIk5wzHMOYtGel8/P9ElYZaQrw46YAlJTYf9Kzauqv/2TcLBDBN4dqULIqjsIOyEKVXz3eiKaRFaM4/cLR+6EEKTcorLzt+s78crzVWyC9mQRFxqc4g4mCx1X3jEmRpcGa3dmwmGuWIVM6yTehZFuAN91BIym+uXOfjG4qbgjoxakuZA4q/E2DPyO4NwqHtdcpjoQYFiXkH2+zqrwqzM+TOg+0tpTcvxXGaQpMLL/GRDYjipMDl6hrVxa8bz/JvxhJv/XDOM8IcWr80fuEqaETWO5Q5pqueNzi0i/juEHTI7EXyQZbzcX971KHupWOEl/yqk9as9ZlITmRvszs7iW8MIqPjtRO7r5wrLJWDey4GL6W+hwJxsW+l0xO6uk9/aSISzw8PiiJozZOulIeX39Pwh/+yH/q/MrcgXvzrX8OXjxsaCKeML3z1rDNctzzKzNHWNIKl1n3b/zO5Z4CehoffblOdhLwkQgCr5/tWeMTwT47OTBk5KgnnD78IaqsKCqahg554RR8KK73orr9Bn7qMIL2tF53+1HUb2svKCtr36UdSU8tYJW4uq1+BEPiwCJrK1YMcNk78jYdjK6jdVsi2qPDSISbWc9SEZPm+Sr6bGj9LobdzD+8ZBxD1P9VihEtOFRViZAdLWba9OZ1RQPyqKxhgYVefeGHqg1+5KXNyK0FbQl1//OMmmX1gwIfzYff258VctsC2DiJGhijn3X8yPVIipF3FAoW1mm4riABBvslGVhWzvxvjtLzqxGkD6sZErKn91WAR0garFFXcWdgbjiFMTdROI8O6MmwPINk/d34PT6iJ5fl1rVKTgnQznc38PKwbiPjp8hvznBTmxWJvIx57B47erXDWRq3rhOX/lWfeH7w8UurMJOnGM8ZPJc31y0GBaT2nav2MoH63P4pykFS6vqWTkyOgw3Uk7gQkHlljnPmxwiDL8xZh+RtlM7jSt1Uanbu+Mx5GtJPSRJpL9jcz0FJm/QiACUYruXKm3jbziGSpUM3bw/0Yov8fDeJaNs2HVEYdnPFTRbDGVL/9yEBqA75FxgDX6tgGSc+7o1XAtHH6cVfzhZUS4flFN1fUpORqJfKddYWl7A5NnX2imsE2uEud46d+Ugf9hkC4+edVuQJcSjaYQiWLZy6R5PIU/eNg2RwGQk0tZjdADBTOH9+dpi/rwM1WDsoUGoEd72x7ZepIN9qnFN85+Vmd6vqSKCEVvql0Z9X+brk7KSEp3kothSuTilpZakHufkG6zAWhK3QrRatJdm0TsstkViQEGQ==';const _IH='2915b9a0f8505ee695fc8241a9aaf806ffdf502eddfe495abd0e4d98a4db77ea';let _src;

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
