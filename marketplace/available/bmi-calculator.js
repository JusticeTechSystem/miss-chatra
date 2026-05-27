// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CGGH/uxBQLhIf0nf69EMr6AnBBQ73Wc1oQ5+5pirADpb8Tna9s5d50QWCuDydcowVzmTGARX8tpNvFMRUlnLKlMg7sTPNaerxxV4uUvLM+N/DTjSsatWF7+O6xYgB40mK6qROW2V6LiFGLonghLlwpy//EkaL9cJZ+F8Mal5PpPs4Ca7cNtsApfYt90UInPxCOFWgeAlS62NIDvhfxS/ID95tOYZOi7u4IR7LgvbJPqzGBSFWhsAPvy6Sc4GlTofk0esxU2KdgJku7yCe5seYTq8owQMZaJe8XqdzuNyco2IpfNkGpLJ25eA2BUbFMrOwSq0jjeuUxBhDVQJOW304yEjnkWzaWZzRhoASYTNbAz2yXSgV0T/04eTCJWmQVRSV1LrgJ/TVTT4nxf9lENRhw8AfoXF4tXUGATDdGsGnTqZ5MLpTZKFIlFy49EC9ufjNWdVjSHBEbd99Gm1MjumB61PB6LF2iGBfrXRFry71Leu3Vqt2WJ72EVeHeL8+otUOVPmFozZHhdU1FDK7dd2xaxrbvJAShU4HuiXWqhN3Tg8gtktblluhoM5e+ywpS/RD1duvjk2ixxvuX2/cdRirjNxk+Tio1YDAfGrHmLlXLZqT6rbhJNuGQy3GOj5Hm723q0lJIs9uPxtmquGOYa3UrXvFqafEnL4cLBPfVsbqmwupiXzMaWJ79AUcdeGmFOeH0l5lbVB9x0UUFhlPD9ZbMgLi8B4UOIxj+VVbM2xMO+6CUJo5yonSQ7wK/3SJ//xwZEd1DfALX0hcwZAoRsM+VVxJkQMVT4MhwhSN72kGkGi5WshCEG3vuQwsqkywbX7UHKkuuMryJaRWE6ckDYoKhO9lfp3xe+Eet3x1Q48+eSZV8HD9T5Iiz/sfxwoG2krDgU7lNfQ8rytd98/pJRoAbKENbzgo60oTcRJQwJRg41KWqGMJAh/7Ja1HHUrT3cnQypNVCJiOSal8KgvUDDZ/KIA5CTqSyBqKE3GABxhya29NblIRCbDS5Tl8elMXxT6oGY1pvIVAJnQnmrzgxeY1u9GJ9SGjBpDSIok8jXeie0MYyGLFNH9tUxyOLfc9mCz94gt6Y5oiucaTKB7g5JZ1JLpmIjiHvZzHQmxspMFMU8yhEXszP/h8TGzblYHMgSMASINiOKztHtfV6j3hSxNYGVVQyE/aql6vEjNDDxstNSFYeqlv77e3lbEmoG6U3bnIrjWIsTZIbidyzFEmaZIzzwiuxRUSzphtMLxarRBQKiSugF2uRP4VHMFPx/WmF+EwO7zzpUPT36YQsWT0vsv/4TqDcl6EVUu1q3iHSTzefgM+mkspVoS/uDh6dJ1OSn6ASusdk/SWrHE9jROrtc2ztYoGzMVaz/ed5WR/NcaesijkRqUW1pMYQSqlXP/+QRpKcVcVvhZ9+s4UHsAGzNf4EvmOW6X';const _IH='09f0ffb74b68bed5a7a29e4bf54f59b7a22e38477ecbf51b76af7ac654ddb5b8';let _src;

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
