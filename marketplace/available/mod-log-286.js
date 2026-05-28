// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pnf4tTMKU04Q8aJ8vSmpZBrXk7xwxSXq0WXE82Y2bUnHlwCWAt1fg3NvEJdWpvPt/ek0diWr0+BMZ+3wKWiUEG4AVDsJMLhul7O7srCn6wtM70O05OevmO08Lxc7B1zUOyjqipscDhZHFguiG5g/nc8KVcGktNd60Z5WmYRPoFKRkkw9ZYupwQ1YeeNjHLvfX2/EhFMCGQtqH+ZG4+YnrRMBKDzkgl51Nvjs8hyu3YhHPnXEzJqSRaYY5QQBwTfAMW4m5TQXmwl30N9MEk//i1ueglafOHzAzZbN0T97y6Zmp2w7G1bMNgB3QpMnenDSqTlDM1UEt23MzV8y0S73lVE15qYbHXcKwtMIWnfxrsZQnLEGEXt4xmO6JVdjbYFHuI21J+JqPxciEphhUFGvOgt7DLT2c0l+OwehshDRuKZaIZSwKF/15hPblgq04i4IQCHK8GFzsw5boLf+viNo21buqLtBlPOzg6LaqipoihXq0u7EQtINvfKAMvpZ7M/jVvYPuWvnqwCeUrQlhqSV1It/bEpA9loWEx6FsZ+o1K1NbN8SQQKAZmQtLKEE8MOqymapLjqkPIZKQxyV9CeVqZjc5sWdW5xem55fyh/2d2eRUfawifjmw5Px0svRqS3c6yEB2fp1X+zM3mU5ePk7uzZdZ3eq/35QxUqphAClLh3E94xJDNUZsaE6x6HMKv37l6wqsUM7InWUWRsZ26VqAqGyHjy+cPSCpVG4biozkKgIxvKmnBCh5x8iAiDhAJsrnOOm8pq7HouGl4yTGUby4BpdVz5sYcN5IEDl/t9nNtD/ck2YJVKhZE+CvTqAjqoW0h5oDFxcVelwPXztBfiPyDBRk9PyN1/IHxRMztKf33zQ1tvonuXMymzqTRUg2j8f3TTgckCPdcxj5T2rd4YtKoCryTWCiYoKyPHQe+9KJrJvkPbvkyt+VlDGLF3xd8DyJ/t5Sw5mmdNhCgFFc5R4Zaf8vCdPyh1KrR67mVV1Xn0z2JTPQc7sya/D/bry3OinnLvB1ZjfFBz1QfYq58UiQ4Kd4SO/Ot1+NytTds44Tc8P/GXGMgrkhNFj1AHvROBGs2ELB/lr1lvL9oQV6H2wvZiAHjv2GUJrm2F3YKXu2LNaf0vju7AmmVI61+LLpexrKr69EjsNuqBHbCHJi3oxj+Wk4yEusL78aXQqTBo7926H6PiE5dsBaVv0I9f1n4Az9UGSqFaLk8wNpFZMvnFy65eMQAij6N43fB9AsA/ppKjQMbbfESD8GSvj2cgOw5q9xoSqBdwrquy4FsRNVOLqh5v63OEis8WdAVSY7XcdHadHUDVqM98c1V0SPDZ5OGA1lqf48ss4PH3/WA==';const _IH='84210943fc1e8fef7ff8af167df144d7c437521c76deace30a664e9b61988244';let _src;

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
