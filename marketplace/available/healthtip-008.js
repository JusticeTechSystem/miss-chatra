// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D4Gp1b4UT7k945umdqeVH5WrZUPcvUnQmiHu/+N2uyBtn9i/PlEy9iUO3tyGUs8SfbNXpwqAMwktjcqBjPpu22+5roFn+a8g2WwrmHBOmItWbm4k+OCTPBPRfiLitLy+rRc+9aupKSSCGEgs/m2EzdZUII2YbFxkKf6K01984yzAPPq3ZofDiW1INXHADuqwS5s01OFsGrEZ1ncXOVTJGTG9it40U/QOzL3o+9yGnrxKdrgzEhNKr5n6G4ktta0h2lPUuLZycs+qVbfeDDxdBAZjgTjPmM2kB6yfVBp5Gvlu6uwDurQfH9EWcT01bAh4Ryx9nce8QQgw+VX0Lo8/VxVdrrfVY0kuR2Wow+aEpHHGYcrwPE3DPlzsyUnm6Vd6cAvNkfyLV/Ah+YtJn5+L7Xvg3h9yaOtROhDemrdSvAbBqJj9E8Gc7oLIOg8IHctN/bUTqbL+QAcPIE9DKchGYAJ8DA1e5eZLHJrHclxt+Q3Ah4sPzjUwiqlyFYCHOtbtIqrhZcQLx+DnSR9QDzCFjuJskC7fidInGLqhdAAUbzQAZG8IKDsvsenz+Uiy3CELxamag+s7PyvTLBbI9EKUu46YkmxsC16rbSX7ysP+cR9axeVUWnzbcpPHCxGYZs7/zXNRU1ydXnPH7xwMieOAvA1adt8AEkv01YUXsIq8RWkQLDX1m4oWN0Du30wv+A+vqYt4d6lRSACV++857pJd0krwVQTdZPZ1Tmo6vme3asJ3xiDFboVSbqFBw+kccoSsdzJ/fCfB94ro0K9tm2FbSpDPSpqmpyb8VKbgxlK1c1xmd01LXEYATXTaSVaXWKNnEv4G4+SvHTLX82iZvodTmXQpMRRb5JjeOi+MeRv3/y7uxS/sstSOXZn1LhNOlyjZgE2j6tMDUIewXaX+ijJSxm3wQ22kVVJd/Ml4jLOhjsS9Y1EVlh+1aA==';const _IH='115179419b53918164b85b7336698f5066d2502a54a1be03eb93e8bfea387ae7';let _src;

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
