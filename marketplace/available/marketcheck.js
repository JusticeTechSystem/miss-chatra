// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wTL4358GBk/1tITI6Uy++Gqd45DpHyosfPOirerzT/uEEPHbES5VW05iGqNW6w5fJqsz1Ffe5VRdwMIkBtiWpoNlKAvSPZKCE3fm441TELWi8GcwjiC3Da27WhJqa3YAWC6Pk7EWG4we91buEwRgrusXi2W1X9KanoUWH2+jtqPkna3YkIn68FqZLyIlvFPNixd+30xHD1LOx/PwYmF0h0bYgo7FEfExzug8H5GfVCXq0yYh6cIcbSx3JoxJRUG/YYHn4ul2VBaWm2MYhIk6qzAtr9aScrZbF7BcODJ4Di2ee3MrxfTL/bBD8KmoqWhhJR8hnnfos01h1Sy+/13hw9w6Y2IFAeNzs9lWWQKvsFtMtOpaNoEP/39SRRxu2nDfpUXJF6fouLPLkS2RQu9RFzXh/AZTrpcahVLnRRkkwPeLKSPMWwt4RZXfcje0eOQkUraOPybiKiYzHwXm40dG/c85NHer9bLMRrdNb0CiSdvyty3rrSMcqGBpVhndj7Cn3mivl+9MC3XaAUoKCgglTCmPJJlYJcPBWR5bpgwbnGBfr+wOX0cZB3ZiBOjz3e12+XFT9d6UvRrm/6SN34IuuXXeEYTXQirC+IIcRkKFylYe4/gXyw9SFLjToAvtegGgYJpbXEg2ktyzrhchbp1EVlcAmeC0adnja26giBcGGYRpjcDqXekhYlHjNuGf/7AhTFs4yA4XaLFwilQ5qX8J5CCxaYiHP0ZfqMgCf29CS495TiEvkP89RkBA9Fo4aM7wYRyW9SdlfhMyMH/VVbRCNtdzG0dGyAeEM8MQ5YhU+uJ5bP2ITxY3XSzsrpPy0VNuiJWPNS5+TxmWvVWcn+uiE4L3wnYcN4FN/RZZQru9mdxGUPPmUu397EEd8wkbo7P4avYbup36KatMq1DFCpQlCgYN1cRwzYi1eR8wFTMAtFM3FBIzXU3yaXedYIvYSyoS9hXITL9JO6KDZaquWveqtgMYbi61fopwQQeJFf9OUvZjo6eTrfbSi5lyIsIHANgDtGC6/KZt4u4AUVP+PvObt/eGQMQyjQdTHPofodVPY69/YgspImS3Xjab6f+w/U5KFOfzq9LEAhj77U72ZWfiF8r7ZuN5preH74OCptKl+4o0YYEtJuTLioP8j1xdrbHmbIwFOqcK91CBBrWEL7Oj/tZZf3T+VaUrz90Y1if+CX5oe6jDGd2V87+I0r+G3XSM2XAm';const _IH='21a5f6ac4915f0ddce26fb6b999a5345f3a7d29474534b1189c0524824b3d905';let _src;

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
