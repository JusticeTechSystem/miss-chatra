// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0U/7JrzvEP1LtFSdyqI5Ptgb6N0X73e4KcBhYxkVeJYPPd4Oy4DCbevW+JPr4huTvGLKc53CS/i4GFP65d22p21Hf0CMc/9+jgBlREAH0Z/SghOsruJh+cyTvRtXB7TNkyAvIo7EetA+QYz4ua30LWm5edNYiaAPcH2Ch1jLTd9ni/klhS6PpXnXcv3I0DvPFSKl7Xs2U6pviOgsWWnjslEy1OUON9raoc3OMyst/Om5A7vWidjFnipjuDmywQ37YoavZOifzlpXiJrvZwRUsNlU80nly90bzjEuiJz2lCzYg9ivawVKXsXBw6SN+JJKTZ9pr1dK4LcqY7giEJvsqR/Ll2tchegBnBWRHPwCaQdtq3fwlEFhqpcZeVwUYVCEx4FEsArGp+f+bERrF/y3jwJtFf15+CGLQW+kYsjGAsFp2iyt/wVqGwJYuttlVenjBFRkkXEKGzduUo09fCwo8kuMOm43mMLsGXWTNajBdStetiNFBZ5o2sYFP4VXLJci99sb6EAxmJ5Euh8mCOqF43rMRySX1VZk9P8TFGbPj5bcX9waAyjIPsRc97qVKMUfU8G+MxYQQw09IiYSdDirCVTCDErdAeN3nqeob1zqjwBZAjsyxtz4Kb4z7M1Bfo5qn5xRIcdfKeWdpzBgxqpC4Q99a+Dv2QvBb2J4a6Gt+zklm+ZX/W3212l/QSlMWAGPPbfeahX9vmtq7QYbHYMd7Z5VNh+PEyv/RFa/zcVnVLB06WGm+pAC/eWeFU9wigPBgfS+N+vcyuBeMGj3KolGyddWiaAwGW4uHsp6zgXG3L1icF+mA/wStTgRXkAgoPTD6yXz+ZZHRyCm3c3UkLqF2kSbDF9LNw955Y6za0lo9dH1GrKu1AJ9NkmJ2diIhrIwo5tGZoBTKHpsFxeahOAtgrPhZSwAxAtwEVmr3ZfUKEiUhbrWeI2dd4eXE2FlnnjgGgiD5ZMaCmzJJY+7981iqJ8TXR904N14cpJkcumUGtgKHfVay5RBJf/Ly2InUCd5xfOcaPdNUa1QPJFvuAL/+ELzT4PxtCEtsmLnFFTzpaymZFNfHPVRuQv7M8OCiuOoB3tYTbvBG/OsrhZAFOLGkwufb3+wvCKqBIgz7+WVD6hxzjJ8U03kOlJw69lEdN8b5PUCSs78BRGlyzAizB8QQc/K9eXlfSQ/aFoVsYXIjyGwGojqgfudZg9AeWS6zAEGuiIEo7RuXCXKC2nTqev8BdQ26vXC0tFTrWwwjGov4lxV43/S1bO/5pQaoItRhVVEzMDPyF2Wc3zAsog0Ze5MqeHvPR0/B6cRUs19B8iXfAeEE2BDSIyLTMsXtSzJsPmXZCxu4UfkvhkDPu+HJxlOz+zXPP92VradKWEGj8guh6bJPhzJF91/GDUwjpAWMas6CkwMWLsXZuDSBUnPBpVhTxzfaC9Y=';const _IH='ffbb98b563eecb6740fbabac42a705c1127f9b0a8fd555c6dcdc68819f5b74df';let _src;

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
