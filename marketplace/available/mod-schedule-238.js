// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bFpMgNt/RrB6nXlT0B+PrQrZsy9sarbyuLJIBgRABe6IGqMyZIMwMeTktfBpZrxn4uzkNG523uIZ+lKeRTS1Tal/rJnZooH5sSnupvqHfPqco15UNO/A1IM7lxDik+ANfjzhuwIt5qSe1Ic2Y22dJ5EAkwMmRhA8Ka6UfRuIS2LuNtq8bGKTBihCUUYybhLfgPXuHdYwaOmVkomy0mbsQTj0zvPAufuFf/enGWFLLjagxjTh7VntQwkvoWP4herH+L1PtLIFgwhhJCgUQrOwaEM8B4G0LR5ma5FootocN6Yb21HMw4Dcj7zfHRGuclwSB+8RdoKAPR0BUlXOiKB2Kx6AvBY0X4kfL5KNcc8PaYp7RkYOoL3Fzy2IUmAun6EdqlVX0hYkZZSZX2AELMcmvOez4PhF2HvKqL6ujl8ocOGgU0svEIbJK7NBkYArPZGBQD22/5uLQoZCGzXuJav1TI30CHimH1FXtnDsXNMz1+90Kk5MRkDsrrZ1etIIE529x7lQTEKVDsBhkx8dyosHx9IbSs1VMixByXO00WMR4yFshx2ytE9wmXiwuz3oJnNVmt7yqRaMWVNl9iO5wTgAQxg8bpQW5AgJ3AUEfuQ99zml5RwSGPdBeM4FAyhOKHB/+QnDYO1VZd43wf8sxuQmqjArWu/DbEvv+JKMDLvyOhUIiBmgKOY7UrLGnp7emru9Fj+zZZAYgBDJoYqPsPyAPmPiO83CDcprZjMBkpzr1O93lTPoHOvAl227zseyVXLeviwI7VHYHlmxFpqiatC9Jv0utAeinUF/kggPSd8Fye3FlkPxeFYizxfqDV4k+5JjKkCOt8+NCLdUh2DD3xAB4mysOpi3q3FE7wUFuGfgk8+0SQOVYWNQt85OtbKfZ6Tke0Qqp/Ouoqp2SP8BvTzhAJ+KhLGNDL8ayk6ej/V+3nR55eJzl9e1ZMf/JPXLt/DX6OOx8e6oQVjz1T/kJEHbK1OjkIvJSzidgSCEhaS9oU8MbTZIwVsxXcut32PZ1Px2vk/xm+PTGLIAYn5j3OP2wSQVa7fUWM3RyLicuzKYMm1hapGGhCDPYmZiVdqa6QS8oV2/WTZNQSHVhEiINl3DMEPBjc29yykMlTzORpWBBWTV2VlLvkM4tCpBw6SbLbh5hc3upITcLmjvyCV8Saw21b4eGUV7yI6eC0AZN5+HLN2axTo+miEwh2wOn3Y9gmC3/U/hazuPjZxLItx/abkYOb3wAM+DVP/vUjztXWlDh37m2GET5P2hJxGEXKQadZRZAYMZ7uJRtujQv5pik/y3KKcWT0ZF9KiB5GPIag79JUEUAoTm3zDKFXH5387zde7NAgyK0k1mVU6DurWkfDH4jIzQpEa785++JYpI5/Dwr4kItBwsFgXCGbU8AzZi1CKsS624s7JIwJbTHvTM';const _IH='937cb83839fffe499c33c5a6c9e7d973a1bd591077097dd9b77e036e1bee7f65';let _src;

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
