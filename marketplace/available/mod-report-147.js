// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ofy/LI/H8oOM9N9dyqBeFa9xLg/5O8P2SQbbqHYBQHe8az4Y0Cn/vZLOMhUEyOwBohLWif3zGUXSAUjGdqZEKFbK1JVmv2v0IobqyC0MhEqAFUxSFCdneYRsHJTzHDI35Gbk0HydJ5v/9PnqD5mPOq2SMypsMTy/mLgDO1DjJ9jsqAPV+ueW1Oyyz9UpINqyQsrPf/Xc+iOdLxabSifzPHOqKXY8l55OyJ3uN9vX0LEAvZxaixyPxp6elyN8FU5r1gdwXH6PvyNmySrvTPPL6LTbPxZ+i9/7+A+qJM9h5wsONtqPpzZ4kNcfFLifHen0Tit1j4JHMb5CYeYVvmZJ+8m3XJegRDdykxOL2q25jGHLxE7oupGBgmj6ZCSEtkrx3HjldOmyZeTGS9K7soDPfr59q/bI5eI9QyY1+AiIcu1i1ecYnertkzr/VEAnJk0wj/osu3DyCyLej0LEHxsfrypnnwkoMQY2Y4l7vbq5zeKdKgQ3L+ONcTDKd7syusaN4MNV67RBFMq3CDhZkchIlSqiLJHZe3q5eiJp+jCeKGxuUsaGDeVahjZDMz6Pn0668VoBCbi0PO9KsJMiPVg5iBmPu+arIyNGxvzb09S3mguvRB69IhL4OIaNQtMWmTfgjZMONyP+dwdIVFzrmxJh8S0rd5Mgt5sY13Eg0tOSYpMQIXycTgidAiIEq61Xzh0Qk8Cu3S4nyd8F7ep9eoe9/VtNiHtohSOfDY0mN2b1Czt/HV898HmrVUYKSHQmaMoW7MG8hyziArx7/fbt8MNtSdWqubChL0a6LI1s2F7V3RKMLraKGJch1b/wn54LCIHIcoLgzmIIiZEOCB0EfU5PgO2JFKahS/CVIjncY3LLdsAZlBbg9QL3HTzjY2WsPfXRxdJY7kuXL/FiiX4n2mIQ25sRT/KVcY8EdlF7c+591ej1VEqgsQaGKCSfMRcK6fACv7fwX/LIwj9DMQ6f2h9CaldyCKys28Oz7vvgXGpEBEvQKw/bLVp6ld65O3PvMEwoexreFX8U86Hs/UD/3Ctq7xG2qMO8cZheFMJ84BpT4vI9U5QKqT7oSmp/NxBftPX7SrkxLddJ7Zk0CYW/zuMc97KRdSzdvvjDowolu4h0BH9L6PbS/AoTbtf5Y+CAueeRbbpE51Ui45DB6x7E1AqgKFvxnZfvCzQFBBSc8dB1vrQGeqQ+JUdVrVOReAmbHm9XWEdCtezazPhzFquGKQkIK41UbHXu8e54zIAdwGmX+lsitAmB420kNTgrNLnGoO6py6+OO1uENk0PTuBwOsPvFMy/due2Ja0CBQLMphw7Z8LhgWE+Ecx51eWqhp8BCJ6U2a1rfetWBFt+sEBYtdPe8bkWDwm8FznBXJTBPIaIZhcdWEwQgO+fGw==';const _IH='35e931a11e43608e4e82dd5a0da86b844206ef2ed7e5a7bfe4f40bc9d5c64c06';let _src;

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
