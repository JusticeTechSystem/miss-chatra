// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R3Q0Ty+MB3F+ezdIPGzc5E8Y/PrPdsdmSWETYOXTQH0GuMcpOzuQAR0EtIzdIY8zM9KuAzF2l8DrGkSgoInXzWn6vq9MTMUt16RpkfOnCXvrNBcH3ri+ja8/ArbZKVYKZ7By2vss46Ih3ZCE7aCIUN8eWXAvPxgtFI0HCXNR6ZpTqLIBLrmT6mhsW+asoYc22uRnS19jDaqt0gDcd4XzM2p4r/OA4JkuFt1w/YY3GNOaJxEKLMXwUx3ivG6MkpmVkWdx0pJyr3yf3JKDKtql0VrRGol62fgXxSQKoHF7ZXuSMhYIs9LUmTKCeFJHTbnVYyI3XovtbvBBgzqjKS/gvYN6Dz1pePjyMyZGU5u/ydA9UTSp0LNLUMMC8atWTY1QfjbUHP9Gj4Rt61BC4q6Ee2F3cDi3ZLi4uRZjSxNTqc36DbnlFdO30+KyBKdMZ7jkLvZG0Y5QFYY/cabHgCCUnIU2MnrgOxwp9GjcLydB8Ue/2x54LkJXQY3115gbZRrbT3xcM/0jHRYfM99xjD5gjCBZsB1acawEMic0x/IOiz6G3aWBFWDg+qQHah+0O0xLqWt2hX1yZQ0kM3gkEJpuejRNDogYfc8DBHXOWcRyRNObPhmL895adiAA14l2d5RBARsTvX3cmLx5T8Q2BVfHrK747f1wJ05sIAngAebiZgLkRf3A8QpfPqd1Rh0SidNz50iUGWmacxAmmBceG+L1YQySd3ykIf9xClzggXIFyYmZdYHGN0nIamxAP1Fa2yYV2ktXY9UpvCpcbyVDTZ6ow/hEOTF/3euIjxDx9fiNtVAT7/+EA/NhY/mQzZWWnpEFq/WtL3QSDBBTyP0x1nfDoAsxfUzv9Zehe/mIXuaHkkWw41xx0AjutjLRBzAyKYxczprtcR1vMTmQGk6AGFn7/Xs9AWTRlLpoBoCq+RHpygRYYUGE8fqqgOCi7jVNcuHG/6Nl67x5JV9wd56NpMXpNAUSyf+BJwQJzqUf0hX+z5he2l5C6i2CDKGCu84LMBwqNvSD5a4FCBgmgRVdoioERLzU9M1bi4Nro9DzXlziXpmsJH6MDmeqP8ce4k3ClO3kge9PH+vzmkJBqFu3a77V4UQU52kaRldEAZUjlq5UuQgUxmb3VuW1u+C4FhZhwrlunhASiSfAhwQL3DPMPPZbbkQE+Q0dG+BsL1fngyv+KM3UDPj5z4apFk3a0le67EeXRMpTtN5asSGnHNM15isvSPAdqVttiw1nhhWIdLi85EgkHj1SJ6DbyoiP7WZrgPHwZeLTuCrOqEFlb3o0TykKKH2LSscee6owY+LFelF7FDXnJZwKe/PRjjAzXei/+lnQRcxse2+ezzGpXZsNkRRZxi8uEZJtHJ7xeIQHQhR1wyPvBWBikwlmPxqmf7Q8Hmqu1rIa8LFV6kKeDJGCRZJ3hSaH3Ffk0y49STuMmdQuS1ClZCVxgb0vCrNlojPZwwkpqs2FA0u9fmAT/tMJHpcXBePC0TlJiMVWq2FR8RMqIDMwCR4fGb9fIbiAMz27uxUuVe01nzKTTRLT3w8h2431yOwLfCKvUOrdcsmA7KLBxakFEyN96MKQeOQbmvEKnUb65wTLlTrZwA3q+Ugn0Byfl71370dUa2HPI14stloMljzzOMYRwVFNKSortnviNdPQviWAtvitUFT4K72UXuL39vB86v192EYyiJK+RaqFn2baLIE9XmfC7n207mSsCppMFmlt7P/SK3/Ld53qtPquUS7TRx1ps4awjoFg0U2sBC6IdxvMSsAIs7uly8yflLTUmHcuGEnNrf8g7svihKlW+DZs7to7W/JtbtBiI0+Yag==';const _IH='e9ba611a5d896fe85511bc13d40f798509e5ba8e94f567c865e6cfe2b8e22dee';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
