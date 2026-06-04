// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hQJYykgXUJPTtSRRbHTcSDabyXCV+4aM98lV5NVdDS8lP3FFLv2G1Uj4Wn4m2VbgxTtgySl/lIoGLFnoxH3wHbmoa3c3Dk7bqgHCoeLWu5oV6WZzVPewbeNt9LbB+hzuV8+yhtq/6NP6A6IMdYyQRtXC+RcAMpU8cPLZdKiUuDlJJI9aaIuE/ZwFUpC+kjRQroQ62SEfLQnMTjXpIa2849l9Wba1MZvg5UOW+5J5UrL2DD65vvI7PnzTvK9129I96Nw4lI7+NHJKrtnEExag9GK64jGYX7Ak7EUaPbWRki0sJZ5EcJjkyb4i54nop3H2VfUAShaVLkJw8VIXR4hu7cTy46sHp/AhgE5tVUKDovDXk1FibEKkI7+/Pny7AC9a/K3s2VhrjxfyuJoFMwzuiDVTlEgbaE1yOQ2U2FuYCcDAmCXk/GTlKLC7Uo2SvZoft/rEqiqqTcdN0QiAg5eVuKllrr2KBFXkI4AV4ew9TaPzBD9MexdL5tV0f1ojcSpoVhbTVxIYakrhplzwQFhl9c30fc51VMcW0KjvvXUxmouU2Cs3kDXtT+Eq0VNpQu+vjhiHHsg6NBK0g4kmh76xqeLLueGreY3xKh/EgzdhTfpARwzqewVE/lDtNbaueymk9qIz7TLcny4/gG8azeN0AYJndVq8yEp8f+9yZdCpL7faXpaf8ZdlrgV7hnudtkx254icdnqzyO601AxbMzMNV1oF3MSBSEEvuHfZQSa56KFh9jcIk0tumhxBYJ+T2mGcwsTxc+lcrX4dUN4Khvy/paj2xuwW20U3ZHfrsWsYVujVgme9/dACMLXXS010eKXJQ9LQu2x7Xuk7vqdbiZuZZnqPMQxjF/sj+jARdMkJMuOrjk8fWZb69mU1JVN2pjTXVTqP0yTlYof2PfN05/EdgEbrvj5YlGjcjIpFjlgV4k4TJa4u8laUdpbxF8NYMOwZQnFwLazNZ0VGqhMRlSMPavkZVn0TcSZstWvEQc+6iQ6nAybupt8mWwwA4bGoilYULYRh2jlFWGf/q2iL9rlPm/XuWL8MBsk94pGvR9G7yay9nbPW7/Dq5JBqZJ2XJ3i014mjPUBPw7t2X638skTPRdqQg0JyCmGLfNsougB4Ea2YFGieUJ6mIsyxoiQjUxHLSuxyCDE+WaRucn4ShbWO7FYl/VWMRlv2EA5HQeWfUu+ZEG9vmMvePirm9nnlGhvTsr+AJ9gb+nV1hYPXrmrCzqm4EPLJ3Ntflxa7oc2NRcIdWpMr1koO8Tx0YsKalkkU2Za9gvzap2HCfQcNVd65GwZE0G2oU+Aa56/y8I2o97Qetysd2pOkSWPAgeU7HDf7DNNvUryKhcmKf64G+roLOH71K8iqlH3t0KEQs3zfVlvGwpQLJazlsDoo8vPldBtouTf8agla1FCSxFMltMwYykVAIjV59rk3pbT/rk9lA38t+jtoT+mZNMb5I3SmPdrRrtZvRS+WuYorC38IB0NYnJY3+6pEv7/fRgROpWo=';const _IH='369c8618376d7d1c6ec21b05de9be93e39f6138f049c7a1ddc97ac23ba5c40be';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
