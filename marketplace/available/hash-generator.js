// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zz0DG6JmJUQyelryLn7IrQgrfIpINirLiZZS1Ee6DzFAZf+9G2xvFnzI3oZUGRCHnNjG6Vk4YWpgeodxw0b9RbNjkz783z7ulTsehij7hYjj1x/ae1wuvspXR6HbkibKGBOk60W4zNUKgojtJ1j88+ob0NhynyTimK4u0Ljt3cHFN3oSm6YPKcqLlVhLfy+QeiEI4+pYXHl0GASja8T1gn4Yi6nVGH2ivdp27+3gQZpkiEtTX5XYZlEpmWA9u4v6U3F4iKOU9u7Vb2fbo2xfFNbE0tdeyAG4188hNSuxhiLfATfI2kXjo/tMoSg33b9ZYHRutCGKWVWdyrwD5W0mLxRON2B4wU6zKETbK1F0vOKlIh8dcq4bfuNcufBPlTExsjfWOa3ENIWkZIikQI71YkuqWSCBLfFqmIzx6XJEHtYI0E6nhZ0hZybC0GBH8Slu5CwI5F0cm17bLn3vQPa2eMNYyks/tlweSlCOhW/r0X0iDIy494c+0NO3M8Mpein+dDNHPoYh1ZfAjPoG3DXjq8LVR1oidI6NQw9SGMNS2Qk53znuM3GDd3HI2RfOhuHbYOUfj27/IyXYfQBSwcg2VbHU3EUKIHhwa/8v1iAmD9vyITeN5dX7N54PwhitoXUEpl/IjpkfGSXFyNCaYDWSfzgvcP7MA8rJEqzi1GF1C9AnG+YX/CABK1SIMVQohQ3CYCSBzTVI+7j3BaX4Uy0chJVkppN710n2RgGC1s19NfmwepoesqRsXefMgxdvblNfu50Nj+n1kQ4w2MnBHOa7dae2/x7nSgMMONOwmorOxZ4mSzGLnhws6NRNdyoxxkpxMOmggw9AI7UPmIWEiVcuz742Ay3eb2prKRjEuAElJrtuUQgYjgAiVzbEAgO43wa4VIQztfeZHjLJL0h1K2o6stoWuMNx/6Jwbgd+q9wBhAs00SL9aBjJBEoeoINctTc058cXHiqQFpNto9VTzKVgvIFu96E3f1OhgEP50auTgvzAxN6N3veohbubLfqJ2RoeDpEJmHnLK9FE9Jlf2mNVGHHd5SVk4mRk/jfvs6iyYO46NG+YLSMo7C8E47XyvF2IypgtL2EMGr7eSJ7nC1ULZZQ56w6iMy1xAjcKs2jAihNXjt32OPyk1+F1VrjM7z0qfP5U4O4Bctday18x+VyvA2uY/vWMqNzEHVcU6CcAipWey5veuEorV942PBqrOV/uyWEUhDeA1n1eu3pDTlLjusynJbRSZyli3KprH3kQTcVbpqSXGsUehj5LDTBHFGJMTvHtxIkxZ09Pc9Nxh0+FfFHuAMbEdgBe2/yArYlLX0SBfHKjaGcKQQbpFq3thiTEtv0u3q/o5TvtF4Oph1PA28DLWngig8n+n36vo2Lq1t1Kok+IAaVlCFDi+s1njIc0z6U1JiP5t+Eqn2osavdtnwHxlCHulQJSSQHpLbolBXoE1ThK2HyQDB4Hs9enjiRa6MKXbtbR1jljWjT9leGGoGIugQFWQPNvt0IQXd1WvbX6uCBAMjl8t4hay6h0nZCbyATCpCu5aeCc23Kup46t3b+nH5n+y90X7NDUNRnv0HvG1RgMohEu1ohrtX5elH7LEQwD/UITsFajazUhhz7veGRKG6w+o/m/lQ==';const _IH='13ecf4b71be7bca629dfec230c729f881f8db04ab676c143b22378ecff1c5128';let _src;

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
