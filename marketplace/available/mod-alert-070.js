// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rsxQAfBLix38RibXZF9byMf/op62qHkuDUXSzfj/UQbG2kg8p/mVqT1MGAIaZV7wSp2OIOvZW35loyziyEyuWMOW5JMDstti14Ew1cDSOmap0LOxlKnDNJrncWaC+J6euR/WtD3Fc/HDFeo5P1xG18gizgXZbK/eZdI+Ni167hWd1rJJaFZ7sKg3HN11KcyUA+vi57iovl7q8BoXuyRgb3PocgSJ2y1GAXBiqXwioX9OHnD4mNy5SKZZIWMmU5gxkg9/P6Hv4T95TphQJR8XdTYH1TbNENH2seKrQLK6sjiXRKmLMyrjMPeEsBJIaUzrzWrKfTo0t8Y4jGes2018BPP3mrnTwn88DkYLL02yL+0T/PYKqvah9omTIGurMElFvQnT3w8ZUw817ntH5Q+o4caejybdYufygxLNq+H+3dZZ0vomsQ7HbYaSrweOk1M2AkeFCKFGJoblB89U2L5NEAFdwSW1oYKA+igzIKQSZEqx5dOBqB4DpmbRKwnXfbWkVcRTauM6Z0XKJXrAzJQvCJjwakoajl5/MxIAANLD5r/jxxAXUgSGiBX7yS1NTl1eytzgxkVngLoYWb3IFm3iKMyEk11antUCAeHPo9mXt1hxNBl4aqM4mqr9d39Pdtk2+WXSGhF8WKPH69zQ8JpAe4f/Wi9ukX82/YELcv12EAPT8uKiJB+6vSJ0VyFS/zwDCwUmmS4zxQk3792KJftd9y1w163A1DrBmHPOxATVl47S5tcdREYGW4rQSbTlep969rjjiFazzXnbzZyGkKr8Wfq0wxcSLUFQD2kcGF18e50wg88GbCxsDDXNOY3aubXp1dSn0Y3Dffa7lL9MPuf49O/RGL+lhrHIJ74L4N8ThkOR9KReJFzZqehCpN1JrvGiB0cVJ++oikNkbXoRKmf9NP8GqVV8wg2C3Rf2Ci3TLaDUD/OMTf+Qyq7tsrMi2pduj+N7NbuT4kzgOWYU3D+EttaUY3gFaAisOCtgdMlNM/nTCtqPWFkMQf7UO5ydtJcpqW2CXluA2xDWSGBdcGyLEG6XZTrm8cleeGjlClxhI5C0xpfHp+WmWy90sCxMp78h/tCbyYD3b+ZJmGYA/SS4ji5YPTuervKZi24Fcr/hpqMdqqKn0tHh9b0BRlI54VWMZREaEOTjP2IxJS42Hhon127UotzDHK1x6CrXKhcM9qd0mQf2ptfDvqx67v02sj/8OIVsYsaTCW2+5+TOhxUSV7LoOcPQ5in9HuHd4/Nf4w0P5kip3q4STYf5YRW6h2WoYzhQGVmEhXT057qxoU84RIDWxfxfc9eW2jvWUAO0lFehiO2P5dblNvoOJSq/dlxc3eR1K18j6w/C8LWS/ZGe4sMrNFCGYFDcnQ==';const _IH='8be74fb395577717dd1b67e8ca856cac4a11a93e7452da82070898c96780c154';let _src;

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
