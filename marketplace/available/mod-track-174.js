// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ebzer1lsWzS61VCiyi/n/D+KACCfceb18glrgfvDN2cRTcPSCMJKPOVDJN1rtX6SV84Uepl+DHxUQtF0PsvghkcRFq5OjWubePTDj0medOhkqTTuw+VoLR2uGCdeWgEHvYk6T3M2eRDEXSbqi9yZ0MGSVHVg5gz0mWrLsp+AtHWN4o9xZZCTH8mT8kUhCqIBNFlok+YtMAf9QKqTOqdhw5ZwQc8hjJbafYilwckx4FKaIAfFLHE2W50QtYtMAGc0Q0EjPIGac1DcEt4AJfuNLew+3evTSzFN6AO/bHo5J5LXugBCRbqgRQs5SRysZA97zx4dK+gUtysZapkFIqnkACgpSSHb0v4pbA8swjVwD/kXtgSR0gmo4MxvEWjpm9RCWet6tVe0/THjO/T2GdIr/yhZGqkCX5nwfY2onrQdczmJAKDwZgPF286FbVfZi9CLY8mBkKykxbVrtjXTvqc5rsO81ZnlWEUtxSyfqghHUXjfRj3n3+Lkmrt+001zJ8f+t+AUUdFUfEpid3sDGSdqGu3T3OxZ4EY2CQXUuEVArNxGz3kBfZAJatQ1f/phdXtEyy7OnghHwHhjj3Qw9M4qOHXxOzF/VwnD7mgX1mrMblOexYGI1vBjBdJRGhS8ftKqMuHxp8ZdVlCtLfdTEQdozZjlGRgCT4BZ5upJllt6gdN27H1meYW/Iv98yzS6hG873cU3G26iluYUgWVdvDtTD+vVLP/O5ylilue6LZ/gIFcA1Iq/LfE5ESSeN7h7aWvaif3xKF/MVDj4uW0yv9Rm0zW1mSZXo+fUHSn32vQuK7xcy/mSAAL0FDT4+rw/mMYD0QnQ533MFqrAkqMBS9H3uAh+esGTYxYrWonBjc+jaTokNrnFVzMIy2FtJQHExR0USgK6gpAQa9XZWMaO99MYQ0quYiw/+CdiUJcJTwEFWsmcwfy+5fD7LwOSbPznMPRPNkG8CbZoHK9ZCzP25vODID9/zq5GyGaQg7OhEUSl5RJwVWAQHE406WgCm+2RaGB91nJTBT8o7uz7yIR64kkh/Cwb5kL+1bPVk1PTOlLTSNfdr24A5+77tq1Rt60RuwC8LBwY8JZf9Sh25qpG75KRRryPd0xJN9bjduv62ZwVh5r3znIYffilRSGbMT2Vqm0MGQWaoUz4o/yBZXttqk+5DMQTuQYxZQNLHB10yVX6ZzF0wR8cIWtzee/sC70zb6wgZg/soqSllDg0KC72l3tepdIAOVKJAFD2DeGCVVzoNzXItHZrd9D3tD2jS1hOPj+6hwUmraDdutK8R3vdvqD1w0mwMx2RBAArh9M6IOuEPCmNHtzxBBC7eFSww/Oho1/bWzn/hVoK0tFF2t/Ccd4qt2hLpuh2+fnNFL1kUrmy';const _IH='e82ae6897719d7e22c865786633e82864ee6c945c51914e8c15c5c03a6a524cd';let _src;

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
