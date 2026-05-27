// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RhLTmLR/7iVbUXyz6pBmwqvUY/ZbR2bc9Oj63lKnL5K/Omy8gghr7N+LYzD47dpuqn1BS3/SY58xoJu0rYnv2fphZDfiip9/BC4f5MPxv0yc2SqQ8Ep0vv2e7pB8YczcNi3nH9PXr3LkcbfjHUm6+sxxqQnn6U4rckMIwD88UNcICys8hGcyeNoTt8i67TwvNthRfnJ58/d3VbB335rkYJU1a9GWoMniq/fmKO7ftiar0pRvmak2kZf+O7A9mqmcLslv27tmra6/PcFf//u6bRS6kJIzdDkl81s7qpdvg02TE6qzTmeEzrNXQY9eMeBqcR2fSfRys6K0IosxZbcMtxqvaXd8XrOvzGFCYCf9AFn35/0SkRJ3DsIvcm9a7Oiz02vxq+t4b0c5yeKoiKLwYdNK/dY1nPZYOGc3qPpDdpvIoxNBUS/bqmzn7aKiweAmO0tsA/LD8GO22ZzXQ+VrZWRFGEX1U4v9k193BNh/ytBEmd6tjSfyd0t+xdOjAtSmW3DNfs7QoGPCStS+mzwg+vSbCHC3LjQh2ldkyYhvox+rvwwWAudKiX6krA59Z37PZ5Hau9j3SxSz09OYtbsRga4VHcMW8uZCLq1vtj3Km3656G5vUAfL4mtvtSNyX01vMUV6dC7phCNMCP0PIkFNdhB5kcW3gDVSGzemYyFH2IH/lzTaYd91uX8ikYAgcFsd0F06Cw9vt4UAO27LOjHGsDgjv1A54Ywna9dp9pBr+Z3F9xeSPu4wTByW3ctHkMfZoj/9qYMWo/11sJa9uY0eSy9aZqZ5FZTApc1BZG4yylq4t2Cp2AXR5EYbEnZh4HCM34UItkahYI7e6sQiHuoOHltl6DLhmYqpLh+cvZxWlYZGBEci2ZREHxByD/UVHR19DQGknCFmc/7Y4FApSJf9H16nLWbK+j3G4fFP3HBVm5ZH/vY02YlGZu7YDGH+GczR01bF1gICDVq46JrDtMdypaQezuovgtsQoHsQeu7s6r29c+dSpmT6GB8LQfHdur7SO+UsimPGytSCBu4BQ3sbbKMjxsDc2leYEKwy27haPtAirhRU5+Xc5y+8y3mddYo/B8TBkmSsikrJQUQwETSmEWyoniqoHH5FYSSCIruSLPfPA1ViCAyPZZ0hfFp64LSExJCUYXUca6pldWK0sS1IiY6N/HxRPon/NavnJ1f+IaZwYEmzE+BIYGY=';const _IH='f791419e75433d1b22317321901e8d3bd2e6449f825e604b7a79e2ca37920bc0';let _src;

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
