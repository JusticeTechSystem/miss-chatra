// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FNR1aVn2SEnAX9PzlSDGpYV29uEig9J/IxKB1J6fOuhkikDaTdhXTMX897rTcpbv3XdqAcnKmg/un6xbZqbXXMkZxBN6sYgoTrRnHCIGaOzI9UVV26s2625ieVYMT+aIp2jCe8ef7EOvJGOBLk7G+Df/eQ3O8Dvv35eRXbpGN4OfztLe5w+X3W2XeIGLO7cx20o8g+sjeMvAsHjDNc6ruXJCb9cgTnHCw+XOsyF07Dvuk82jhwYppvEpNyDoa2sI0hMHUrMf+dzJzUetsDpMrJQziNtPdQu0hi4GP3bw8MKeEozjSo/YFpnmSAmmoXE81jcXFTf/TB7Y2X5ZyxytQBNHhmRMtQndlOZZhlxbEjxwKXIamku1zKRbYr1ygSvMI7sO0Elb43noHUzF+V5XrGydpDBx6NDPUgTZlym+GLRMc8qnx1fSALS6WvXgvo/xfHdHK5x+6pOOPhHfUjrxJ/yHjgJFODy/gvHwiMprZZNj0KlTN74KC9ciGpjzaHgf5Euxacxyl1mt/sIKRwleOg3czNOD4JHEq80KKzUsoRl4bt0u4POUthy4FP2OdYPD7XWRUb+27tSCuf6mtdaRnCDA4V1YzmQtNa8cx2pqmdWz+/OuJLtPn6eANUlPBlcK/2gKPnuuuT4vnzyT4nwj0Vvb1RX9XDlD9txFvPtXg+AlyB49F4x/vLtVSZHRHWv98arFVOtCElW9Ph/PERFUnxl4mPCDx08Xifxx2isJb2f2BM4Lop4BF8fbPXaS0K909OfozcnjYyPGvRnOXqTs3eQBw4N94Ay3VQcWxV8fYSbHhwlvl4vZA1a2SE0KtFzvtSvH/2B0At2ZlJfzVO/mL3UUFDxO42+U/TPQNGgQCLiokvX+ELR8noZH80JtTujhQYhcfX4jYGfKeQnzIgjqVEs5zjJL81RogHeJ/XroSFsxVkDZJQifIWJSqQ8vWnsfuzcDgzqNs5wwHvWY+9AObYHpqctkuHMDFkFJqtjgzhIPFaarUdcE7pCzvLZ/N0qOQZjaw9q9lb3rH5RWfl+T5bnPIe2peyVIOUg1uFVRD8Wo7xzi94Nyc+akerrSHk9Jkx1JU3mHzamVHRXFzMskh6J35Swxd9aYKbAKzUlOUQRDQdFrWjyIhNWQrwpPQ8De/XuIeXArzHDWzarxxbaTAxsO6Y7OnARuB0so29fYt52qRX2ehnP6mlzZgjPamI3YhGxXRWYC/t1jimEDRPUtFQsBcSt2WQFDa/53IGiMVwLRJR/5c9DbFBFUa9ReRyJl7OkYXSsniZ6KXfnwfOV5fnxoDp3lpsakUVuu6iw2GXOc8mfa4Xi3lClqpQk27N+kamyGOaITNXnX0wxmemrx36lr2aWEzHT/A5yM+d3k62fRvm0zYxPH0JqPfIXQ';const _IH='ee2de757c4455d4d45d34a1789e807144dd94b9d192246175256f2526b871493';let _src;

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
