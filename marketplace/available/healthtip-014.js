// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1YQeqTIoh/OLr8/yMpLqQYzmjn9BKOvFUWagnNqk89iMvikLy3CQfVdOdA+7D4ENv/1+vBIkAX7jm9CPLVzYbdnIfVl5zZVweTDTgfGX5SrQlv0aStL6kLNRCMyBVLOLfR+xZctK2seC0yJT0xJ5vW3AtkRNo/u5sHOsJ9NI6WdDUMBWQIpH1YLL2msBzLB9ApJ7r5sGyD8jWUSVpauZXufAUmiOg4Gxa2D7jV/szMLrKfwSHzs9uvefxRbqpmA9F91kDztlb0K9hkHmAyg/GebrL/LKztIFVU2/tQv/0Kl/ywvQDt/h5V0sBRHR2OBukl6NJ1jiub2m48mQCqTyvyK5rrOqVrlHrqnwoWgEbFKB+6Gv0xjKbBde91Awys9Ma3roYUD4BSsWv0MYHsB+Zpc9FsopTvmtVTNCbY+adPwlr9nmC3XY3WlH7A2YqA3WP2xvlRSZDBrRKUn+0G7DJpFDgeidifbUYhMYQCEZyQXKZvsiMUU61JgffLB94nOYKZ71zFzolpZ95vicFinqzQMuMOtzKWfCvFvuv5vTAyZe2xkngISsE3BQTcxTY6I9HSZCLdq3x5tvAXfjcI6CaHFcBRWCaV6k6AuhBk467/u60DZjz6Tplxbb7k2AsRtRoXX49x4PpjGGnUQATivdNQYMKhfFpkPwqMjqb52ARZzVa4BlSZzliutaHlbokWwJZDVdEP4Q83ZlXc1MRB6l0qB1iSApcdd4FWYChXfDPvBG/VgeiGqJiJMOjgRjt7YMbBm2uCF97t5SpgevhR0dtW7+YA6VBCPu8VEXK6kJCrhWMeHz+JeRbjrk6F0iOdzSo3OvtMY2eLPo+QeAsyOzRaOsvkrKCuGWcZUSPHpCaNyWaoRQuG2V/iYIpz9tvjwXs0hlhnBSIalwoVCOA4l8eiI8+kob3F+oHTsY3K9ULhnJzF4YnwSp4E2taUo=';const _IH='32fecba68e5c55bdb757a2e0437b78af7d1c8c2ca893d696bddf6e95c0d5e083';let _src;

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
