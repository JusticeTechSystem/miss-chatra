// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT21uWXlTG9z2hcpBicU7nrotndOOB+X4A85S3npAqd1yNMXeBm/FaD1979OztcRWEkqQOoAXkiFJ+SG+C4GeV/4SkJv1/p94IT996IYEXDqgaXrhlY+shhZJjTzLydi6zw0ORafbyeKtoRl2i5Gv+sX4hosojzGXHccPbDQYqa8c6nsAbPBGq3ilyLewbiBUk9ve9LHidFFcT8Bt6R41ZlCbqYvdey2LALYgspF8bzZCCQpHP6ybn6Ld86XCdwqbUXcesVnCx6gbwwnaxQwCT5xUQ/saDPWdupIvTpuNqt06OfpXtqCxDEMKOjz98e2E1bnFA9WkosAFT8oPVlCKmGECV+ECFh2lrxBt/6VRw36ESzCOrJ5zFofz5Ig2knzIq7Ic8VP1+ewPIHkP0lE+GfCamfDM38eplx+hkvGN+guVqIEd8L6o+h7BuYNj7/OnGL89LVsQNNjzqCad/8YDQqPJ5CcMggLAaMc+mECLH27bWK+RpSMoEjKcScJsAdPU9ezYIfw8kLKR/qjLKEWe5V/hea4AoSqnR3dec7umbiBDE7Qp78SUOA+Ivo9fLNLGhtLjRyx1PCZW+xz2hTf78UIgXajGBqF8h1dSo3juKshFTOGWto3sFWlM/Ya5whULIQoH3QIgvkUwq2Yi9Lzhd35V+OVy/6oqFZZLB+C1f8Qi77iA6yuP8ZgYfFxMFuccmWIK7eKw+JDDPk8l+9Gu9/3SFjC49hNyEotVDliFAfH1IB1DwyVcatw0ID9gpJX92vh1BMJLvz6qXlaVnLNbjnAWHB2PnrMX9pmOEJEnE2ow1b+CZUOPVrQJ+rdR2UIzq+bvgEHCGLjF0RtUkllV5OKhdJtGjeoxYjnj8HKllpLMwOTRhHJX01ZeMfRyRDbJJ3qBJQ+vbJK4I0vxPiZX0B4hNvxGT3DL9finLCVIKe6IhRRzoLQaqfiytxF3ws9nxQD12xgRDG3Fj67eJG30wOsKI99/LHhYWbHJvKN01BUW+T3GXVpLJ4ZTrmpV+mLQVGS5ImgOQZ/mwjuDJREpUlvUbpuB2lwRirk+dwxajjreIYBJjZAWSYwaBKgqyESnM/XgnTwHttBzBCZwfsIoNQSbtXMqLeZfXNmHUzz7W6hR0GU07YgtohxUV0rOBHDU/xP1jnCHCb137L4UvO4A74IOq/t0BSaJcxr7lTnYB1uYPHBiV8xmQ1xzCTm1lWI+r1I9ei+2D9DIVy24KbqGCc+VQpd0tp2SzA5DLXbYeY7GJf8T5L/MKmgMpnTWvlHZJA2xg72OoTaZk2aJYytRIeic0DXVuE90/sl3kSxRaTdtGUgdJ0zfOtcF4wH9nZlamZMaY43qi3mOaFqYOif4VXSXe1ZUIvIu7D6LTr7b8=';const _IH='8c2effceef50d1bbbff5e78b3229d6f3021972f5017fe0a00e6cc82bfbe75bf6';let _src;

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
